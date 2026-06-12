import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { response } from "../middlewares/response.js";

export const init = (app, options = {}) => {
  const config = {
    cors: true,
    helmet: true,
    logger: true,
    json: true,
    response: true,
    ...options,
  };

  if (config.json) {
    app.use(express.json());
  }

  if (config.cors) {
    app.use(cors(typeof config.cors === "object" ? config.cors : {}));
  }

  if (config.helmet) {
    app.use(helmet(typeof config.helmet === "object" ? config.helmet : {}));
  }

  if (config.logger) {
    app.use(morgan(typeof config.logger === "string" ? config.logger : "dev"));
  }

  if (config.response) {
    app.use(response);
  }

  return app;
};
