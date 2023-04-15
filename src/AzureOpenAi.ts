import fetch from 'node-fetch'

type message = {
  role: string
  content: string
}

export class AzureOpenAI {
  apiUrl: string
  apiKey: string
  messageMemory: message[]
  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
    this.messageMemory = [
      {
        role: 'system',
        content: 'You are an AI assistant that helps people find information.',
      },
    ]
  }

  async chat(content: string) {
    this.messageMemory.push({ role: 'user', content: content })
    const body = {
      messages: this.messageMemory,
      temperature: 0,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 800,
      stop: null,
    }

    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    }

    const res = await fetch(this.apiUrl, { method: 'post', body: JSON.stringify(body), headers })
    const result: any = await res.json()
    return result.choices[0].message.content
  }
}
