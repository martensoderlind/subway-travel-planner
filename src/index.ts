import { createApp } from "./app";

const port = 3000;

createApp().listen(port, () => {
  console.log(`listening on http://localhost:${port}/`);
});
