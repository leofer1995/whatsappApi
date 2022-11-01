const messageText = (textResponse, number) => {
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

module.exports = {
    messageText
}