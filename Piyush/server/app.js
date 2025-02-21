import express from 'express'
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173",
}))

app.post('/bhfl', (req, res) => {
    try {
        const { data } = req.body;

        const numbers = data.filter(item => !isNaN(item));
        
        const alphabets = data.filter(item => isNaN(item));
        let alphabetsToReverse = [...alphabets];
        
        const highest_alphabet = [];
        let highestAlphabet = alphabetsToReverse.sort().reverse()[0];
        
        if(highestAlphabet) {
            highest_alphabet.push(highestAlphabet);
        }

        res.json({
            is_success : true,
            user_id : "john_doe_17091999",
            email : "john@xyz.com",
            roll_number : "ABCD123",
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        console.log("Error coming in post api");
        return res.status(500).json({
            message : `Error in post api ${error.message}`
        })
    }
})


app.get('/bhfl', (req, res) => {
    try {
        res.json({
            operation_code : 1
        });
    } catch (error) {
        console.log("Error coming in get api");
        return res.status(500).json({
            message : `Error in get api ${error.message}`
        })
    }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})