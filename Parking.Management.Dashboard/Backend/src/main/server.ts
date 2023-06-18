import { app, env } from "./config";

const { port } = env;

app.listen(port, () => console.log(`Server listening on port: ${port}`));
