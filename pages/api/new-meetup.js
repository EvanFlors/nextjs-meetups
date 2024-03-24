import { MongoClient } from "mongodb";
const URI = 'mongodb+srv://admin:nomelase@test.ivpvtnq.mongodb.net/?retryWrites=true&w=majority&appName=Test';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(URI);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup Inserted!'});
    }
}

export default handler;