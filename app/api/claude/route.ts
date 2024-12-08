'use server'
import { ref, onValue, push, serverTimestamp } from 'firebase/database'
import { database } from '@/lib/firebase'

import { NextResponse } from 'next/server';

// setup the AI model to be used across the functions
import Anthropic from "@anthropic-ai/sdk";
// TODO: extract this to an env var
const model = "claude-3-5-sonnet-20241022"

//TODO: prompts need zod validation

export async function POST(request: Request) {
    try {
        // Extract the data from the request
        const body = await request.json();
        const prompt = body.prompt;
        const user = body.user;
        console.log(`text received: ${prompt}`)

        // Save Prompt
        console.log(`pushing to db: ${prompt}`)
        const messagesRef = ref(database, `chats/${user}/messages`)
        await push(messagesRef, {
          text:prompt,
          sender: user,
          timestamp: serverTimestamp(),
          isAi: false,
        })
        console.log(`pushed to db: ${prompt}`)
        const anthropic = new Anthropic();
        // Generate Response
        const promptResult = await anthropic.messages.create({
            model: model,
            max_tokens: 1000,
            temperature: 0,
            system: "Respond to the user's message in a short and concise way.",
            messages: [
                {
                "role": "user",
                "content": [
                    {
                    "type": "text",
                    "text": prompt
                    }
                ]
                }
            ]
            });
        const fullText = promptResult.content.map(c => c.text).join("")
            console.log(`text generated: ${fullText}`)

            //TODO: add promptInfo as a model and get the data off of it 
        // Save Response
        await push(messagesRef, {
            text: fullText,
            promptInfo: "",
            sender: user,
            timestamp: serverTimestamp(),
            isAi: true,
          })
  
      return NextResponse.json({ message: 'Post created successfully', result:promptResult }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
  }

