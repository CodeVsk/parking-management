import { app, env } from "@/infra/config";

const { port } = env;

app.listen(port, () => console.log(`Server listening on port: ${port}`));
