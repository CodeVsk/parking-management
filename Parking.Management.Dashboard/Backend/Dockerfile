# Define a imagem base
FROM node:18

# Configura o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Instala as dependências do projeto
RUN npm install

# Copia o código-fonte da aplicação para o contêiner
COPY . .

# Compila o código TypeScript para JavaScript (se necessário)
RUN npm run build

# Expõe a porta que a aplicação irá escutar
EXPOSE 3030

RUN npx prisma generate

# Comando para iniciar o servidor Node.js
CMD ["node", "dist/presentation/server.js"]