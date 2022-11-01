
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappModel = require("../shared/process.messages");
const processModel = require("../shared/process.messages");
const samples = require("../shared/sample.model");

const verifyToken = (req, res) => {

    try {
        let accessToken = 'hdy87as87dhsa8d8asdy8s7dya87dya7d';
        let token = req.query["hub.verify_token"];
        let challenge =  req.query["hub.challenge"];

        if (challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else {
            res.status(400).send();
        }

    } catch (error){
        res.status(400).send();
    }

}

const recibeMessage = (req, res) => {
    
    try {
        let entry = (req.body["entry"])[0];
        let changes = (entry["changes"])[0];
        let value = changes["value"];
        let messagesObject = value["messages"];

        if(typeof messagesObject != "undefined"){
            let messages = messagesObject[0];
            let number = messages.from;
            let text = getTextUser(messages);

            if (text) {
                processModel.process(text, number);
            } else {
                processModel.process("hola", number)
            }
            // } else if(text == "imagen") {
            //     let data = samples.sampleImage(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "audio") {
            //     let data = samples.sampleAudio(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "video") {
            //     let data = samples.sampleVideo(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "document") {
            //     let data = samples.sampleDocument(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "boton") {
            //     let data = samples.sampleButton(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "lista") {
            //     let data = samples.sampleList(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else if (text == "ubicacion") {
            //     let data = samples.sampleLocation(number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }else {
            //     let data = samples.sampleText("no se reconoce el comando", number);
            //     serviceWhatsapp.sendMessageWhatsapp(data);
            // }

            myConsole.log(text);

        }



        res.send("EVENT_RECEIVED");
    } catch (error){
        console.log(error);
        res.send("EVENT_RECEIVED");
    }

}

const getTextUser = (message) => {
    let text = "";
    let typeMessage = message.type;
    if (typeMessage == 'text') {
        text =  (message.text.body);
    } else if (typeMessage == 'interactive'){
        let interactiveObject = message.interactive;
        let typeInteractive = interactiveObject.type;
        myConsole.log(interactiveObject);
        if(typeInteractive == "button_reply") {
            text = interactiveObject.button_reply.title;
        }else if(typeInteractive == "list_reply"){
            text = interactiveObject.list_reply.title;
        }else {
            myConsole.log("sin mensaje");
        }
    } else {
        myConsole.log("sin mensaje");
    }
    return text;
} 


module.exports = {
    verifyToken, 
    recibeMessage,
}