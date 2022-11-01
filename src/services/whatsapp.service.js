const https = require("https");

const sendMessageWhatsapp = (data) => {
    const options = {
        host: "graph.facebook.com",
        path: "/v14.0/107790982103580/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer EABNCd8srfcgBAOw55bmaLNLAmDnhkMJHycWuiRbYj9t2MIqvkiePJsK1d1si8YFIVVImHrdUVifpVEZA1hac2RWyEZBHMdAZCVUuVyQQIlWKmEuQEQVwhRqBSAbXG3fuKiKTlakcsHGa2NSgmrFlZBcxXEL5LYjThZBkdRHlNa8CLgNI0YeFL"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    sendMessageWhatsapp,
}