import dotenv from "dotenv";

const envFound = dotenv.config({
  path: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : ".env.production",
});

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export const env = {
  port: process.env.SERVER_PORT,
  jwt_secret: process.env.JWT_SECRET,
};
