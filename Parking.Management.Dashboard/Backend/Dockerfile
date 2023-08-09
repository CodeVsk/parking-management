# Define a imagem base
FROM node:14

# Configura o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
COPY prisma ./prisma
COPY src ./src

# Instala as dependências do projeto
RUN npm install

# Copia o código-fonte da aplicação para o contêiner
COPY . .

# Copia o arquivo .env para o contêiner
COPY .env .

# Compila o código TypeScript para JavaScript (se necessário)
RUN npm run build

# Expõe a porta que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar o servidor Node.js
CMD ["npm", "start"]