import express from "express";
const app = express();
import conectarAoBanco from "./src/config/dbConfig.js";

const connection = await conectarAoBanco(process.env.STRING_CONNECTION);

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um lindo pôr do sol na praia",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Um gato adorável dormindo",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Uma paisagem montanhosa incrível",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Uma deliciosa pizza",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    descricao: "Um carro esportivo vermelho",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 7,
    descricao: "Uma flor colorida",
    imagem: "https://placecats.com/millie/300/150",
  },
];

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 !");
});

async function getTodosPosts() {
  const db = connection.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

app.get("/posts", async (req, res) => {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
});

// function buscarPostPorID(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorID(req.params.id);
//   res.status(200).json(posts[index]);
// });
