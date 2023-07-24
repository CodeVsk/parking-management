import dotenv from "dotenv";

const envFound = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export const env = {
  port: process.env.SERVER_PORT,
};
