import express from "express";
const app = express();
import routes from "./src/routes/postsRoutes.js";

routes(app);

app.use(express.static("uploads"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 !");
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
