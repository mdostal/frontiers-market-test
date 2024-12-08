'use server'

import { NextResponse } from 'next/server';
import { Database } from '../../server/db/rtdb';
import { getModel } from '@/app/server/ai/ChatModelFactory';

// We currently want the model to stay the same for the life of the server 
// If we decide we want to do 50/50 or something, we can swap this or have it check as it goes
const model = getModel();

export async function POST(request: Request) {
    try {
        // Extract the data from the request
        const body = await request.json();
        const fromUser = body.fromUser;
        const toUser = body.toUser;
        const database = new Database();

        const result = await database.migrateMessages(fromUser, toUser);
        
      return NextResponse.json({ message: 'Post created successfully', result  }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to migrate messages.' }, { status: 500 });
    }
}