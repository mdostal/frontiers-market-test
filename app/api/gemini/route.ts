'use server'
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { ref, onValue, push, serverTimestamp } from 'firebase/database'
import { database } from '@/lib/firebase'

import { NextResponse } from 'next/server';

// setup the gemini model to be used across the functions
const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
            prompt,
          sender: user,
          timestamp: serverTimestamp(),
          isAi: false,
        })
        console.log(`pushed to db: ${prompt}`)

        console.log('we have a key?'+genAI)
        // Generate Response
        const promptResult = await model.generateContent(prompt);
        console.log(`text generated: ${promptResult.response.text}`)

        // Save Response
        await push(messagesRef, {
            promptResult,
            sender: user.id,
            timestamp: serverTimestamp(),
            isAi: true,
          })
  
      return NextResponse.json({ message: 'Post created successfully', result:promptResult }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
  }

