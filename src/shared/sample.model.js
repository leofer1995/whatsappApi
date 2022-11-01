const sampleText = (textResponse, number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "body": textResponse
            }
        }
    );
    return data;
}

const sampleImage = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "image",
            "image": {
                "link": "https://logisticapress.com/wp-content/uploads/2022/03/Kargoru-las-pymes-tienen-un-aliado-en-logi%CC%81stica-.jpg"
            }
        }
    );
    return data;
}

const sampleAudio = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "audio",
            "audio": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
            }
        }
    );
    return data;
}

const sampleVideo = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "video",
            "video": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
            }
        }
    );
    return data;
}

const sampleDocument = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
            }
        }
    );
    return data;
}

const sampleButton = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Mensaje de tipo interactivo"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "1",
                                "title": "Si"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "2",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        }
    );
    return data;
}

const sampleList = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "context": {
                "message_id": "1"
            },
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "<HEADER_TEXT>"
                },
                "body": {
                    "text": "Seleeciona"
                },
                "footer": {
                    "text": "<FOOTER_TEXT>"
                },
                "action": {
                    "button": "Hola",
                    "sections": [
                        {
                            "title": "Hola 1.1",
                            "rows": [
                                {
                                    "id": "1",
                                    "title": "hola1.1.1",
                                    "description": "hola"
                                },
                                {
                                    "id": "2",
                                    "title": "hola1.1.2",
                                    "description": "hola"
                                }
                            ]
                        },
                        {
                            "title": "hola1.2",
                            "rows": [
                                {
                                    "id": "1",
                                    "title": "hola 1.2.1",
                                    "description": "hola 2"
                                },
                                {
                                    "id": "2",
                                    "title": "hola1.2.2",
                                    "description": "hola 2"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    );
    return data;
}

const sampleLocation = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "location",
            "location": {
                "latitude": "-12",
                "longitude": "-77",
                "name": "Ven",
                "address": "En tu corazón"
            }
        }  
    );
    return data;
}

module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButton,
    sampleList,
    sampleLocation
}