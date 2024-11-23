import conectarAoBanco from "../config/dbConfig.js";

const connection = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getTodosPosts() {
  const db = connection.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

export async function criarPost(novoPost) {
  const db = connection.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.insertOne(novoPost);
}
