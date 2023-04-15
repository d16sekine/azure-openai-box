import { StdinLineStream } from 'stdin-line'
import { AzureOpenAI } from './AzureOpenAi'
import 'dotenv/config'

const main = async () => {
  const apiURL = process.env.AZURE_OPENAI_API_URL || ''
  const apiKey = process.env.AZURE_OPENAI_API_KEY || ''
  const inputStream = new StdinLineStream()
  const azureOpenAi = new AzureOpenAI(apiURL, apiKey)

  let i = 0
  while (i < 30) {
    const content = await inputStream.getLine()
    const result = await azureOpenAi.chat(content)
    console.log('> ', result)
    console.log('\n')
    i++
  }
  inputStream.close()
}

main()
