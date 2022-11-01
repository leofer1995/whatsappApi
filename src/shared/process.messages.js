const whatsappModel = require("../shared/whatsapp.model");
const serviceWhatsapp = require("../services/whatsapp.service");

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    let models = [];

    if(textUser.includes("hola")){
        //Saludar
        let model = whatsappModel.messageText("Hola, un gusto saludarte", number);
        serviceWhatsapp.sendMessageWhatsapp(model)
        models.push(model);
    } else if(textUser.includes("gracias")){
        //Agradecmiento
        let model = whatsappModel.messageText("Todo un gusto", number);
        serviceWhatsapp.sendMessageWhatsapp(model)

        models.push(model);
    } else if(textUser.includes("adios") || textUser.includes("chao") || textUser.includes("bye") || textUser.includes("hasta luego") || textUser.includes("adiós")){
        //Despedida
        let model = whatsappModel.messageText("Espero verte pronto", number);
        serviceWhatsapp.sendMessageWhatsapp(model)
        models.push(model);

    }else if(textUser.includes("¿quien eres?")){
            //Despedida
            let model = whatsappModel.messageText("con quien cree que esta hablando", number);
            serviceWhatsapp.sendMessageWhatsapp(model)
            models.push(model);
    } else {
        //No entiende
        let model = whatsappModel.messageText("No entiendo", number);
        serviceWhatsapp.sendMessageWhatsapp(model)

        models.push(model);
    }


}

module.exports = {
    process,
}