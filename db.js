import { MongoClient } from "mongodb"

const connectionString = "mongodb+srv://corta4000:lechuguita73@cluster0.ggncse0.mongodb.net/"

const client = new MongoClient(connectionString);

let conn;
try { 
    conn = await client.connect();
}   catch(e) {
    console.error(e);
}

let db = conn.db("ecomerce");

export default db;
