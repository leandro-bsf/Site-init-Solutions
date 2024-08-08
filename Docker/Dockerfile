# Use a imagem oficial do Node.js como imagem base
FROM node:18

# Crie e defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json (ou yarn.lock) para o container
COPY src ./src

COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante do código da aplicação para o container
COPY . .

# Exponha a porta em que a aplicação Node.js vai rodar
EXPOSE 3000
CMD ["npm", "run", "dev"]