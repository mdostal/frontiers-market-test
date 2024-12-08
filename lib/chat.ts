export const migrateMessages =  async (previousUserId: string, currentUserId: string) => {
    const response = await fetch('/api/migrate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromUser: previousUserId,
        toUser: currentUserId
      }),
    })
    return response
  }

export const sendMessage = async (text: string, currentUserId:string) => {
      const response =await fetch('/api/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: text,
          user: currentUserId
        }),
      })
      return response
  }