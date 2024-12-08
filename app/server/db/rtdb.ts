import { ref, push, serverTimestamp, onValue, get, set } from 'firebase/database'
const FirebaseDB =  require('@/app/server/db/settings/firebaseDB') 

export class Database {
    private connection: any;
    
    constructor() {
        this.connection = new FirebaseDB().getInstance().getConnection();
    }

    // Currently we only push messages to the db
    async addMessage(userId: string, message: string, isAi: boolean) {
        const messagesRef = ref(this.connection,`chats/${userId}/messages`)
        await push(messagesRef, {
            text: message,
            sender: userId,
            timestamp: serverTimestamp(),
            isAi,
        })
    }

    async migrateMessages(fromUser: string, toUser: string) {
        const messagesRef = ref(this.connection,`chats/${toUser}/messages`)
        const previousMessagesRef = ref(this.connection, `chats/${fromUser}/messages`)
        onValue(previousMessagesRef, (snapshot) => {
          const previousData = snapshot.val()
          if (previousData) {
            Object.values(previousData).forEach((message: any) => {
              push(messagesRef, message)
            })
          }
        }, { onlyOnce: true })
    }
}