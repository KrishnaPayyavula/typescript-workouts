import {TranslateClient,TranslateTextCommand,TranslateTextCommandInput,TranslateTextCommandOutput} from "@aws-sdk/client-translate";

const client : TranslateClient =new TranslateClient({region:'eu-north-1'});

let params:TranslateTextCommandInput ={
    SourceLanguageCode:'sv',
    TargetLanguageCode:'te',
    Text:'Hey, My name is krishna and how can i help you ?'
};

const command = new TranslateTextCommand(params);

const translate = async() => {
  const data: TranslateTextCommandOutput = await client.send(command);
  console.log(data);
};

translate();
