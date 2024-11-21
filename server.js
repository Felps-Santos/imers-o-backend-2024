import express from "express";
const app = express();

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

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});
