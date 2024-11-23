import express from "express";
import { criarNovoPost, listarPosts } from "../controller/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", criarNovoPost);
};

export default routes;
