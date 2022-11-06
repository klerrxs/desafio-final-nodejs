import express from "express";
import "express-async-errors";

import { AppException } from "./errors/AppException.js";

import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppException) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }
  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

app.listen(3333, () => {
  console.log("🚀 Server is running on port 3333");
});
