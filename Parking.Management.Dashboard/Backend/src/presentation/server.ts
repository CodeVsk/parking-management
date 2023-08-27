import { app, env, mapper } from "@/infra/config";

mapper.createMapper();

const { port } = env;

app.listen(port, () => console.log(`Server listening on port: ${port}`));
