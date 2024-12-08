'use server'

import { NextResponse } from 'next/server';
import { Database } from '../db/rtdb';
import { getModel } from '@/app/server/ai/ChatModelFactory';

// We currently want the model to stay the same for the life of the server 
// If we decide we want to do 50/50 or something, we can swap this or have it check as it goes
const model = getModel();

export async function POST(request: Request) {
    try {
        // Extract the data from the request
        const body = await request.json();
        const prompt = body.prompt;
        const user = body.user;

        const database = new Database(user);
        
        // we do not await this since we want it to happen while we continue
        database.addMessage(prompt, false);

        const modelResponse = await model.getResponse(prompt);

        database.addMessage(modelResponse, true);
        
      return NextResponse.json({ message: 'Post created successfully', result: modelResponse }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}