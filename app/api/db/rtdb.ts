import { database } from '@/lib/firebase'
import { ref, onValue, push, serverTimestamp } from 'firebase/database'

export class Database {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    // Currently we only push messages to the db
    async addMessage(message: string, isAi: boolean) {
        const messagesRef = ref(database, `chats/${this.userId}/messages`)
        await push(messagesRef, {
            text: message,
            sender: this.userId,
            timestamp: serverTimestamp(),
            isAi,
        })
    }
}