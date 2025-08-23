import { Hono } from "hono";
import { validator } from "hono/validator";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get(
  "/message",
  validator("query", (value, _c) => {
    return value;
  }),
  (c) => {
    return c.text("hello world!");
  },
);

export default app;
