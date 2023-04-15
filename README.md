# azure-openai-box

This is a sample code for [Azure Open AI API](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service) written in TypeScript.

![demo](./demo.gif)

## :rocket:Feature
- use Terminal as UI
- support conversation history


## :gear:Requirements

- You need to be able to use [Azure Open AI API](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service).

## :computer:Setup
- install the module
```
yarn
```

- set the environmental variables
```
cp .env_example .env
```

### environmental variables
|name|description|
|---|---|
|AZURE_OPENAI_API_URL|Azure OpenAI's API URL|
|AZURE_OPENAI_API_KEY|Azure OpenAI's API key|

## :technologist:Usage
- Please execute the following command.
```
yarn dev
```

- Please enter your question into the terminal and the answer will be returned to you.


## :blue_book:Note
Conversation history will be deleted upon completion of processing.

## :bulb:License
This project is licensed under the terms of the MIT license.