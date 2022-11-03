const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json([
        {
            name: "nitesh",
            email: "sawantnitesh76.ns@gmail.com"
        },
        {
            name: "bitch",
            email: "bitch@gmail.com"
        }
    ]);
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`App is listening at ${PORT}\nGo back and think again you bitch`);
    } else {
        console.log("Some error occured you fool***** \n Go back and think again you bitch")
    }
})
