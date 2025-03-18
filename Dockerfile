# Etapa 1: Construir la aplicación Next.js
FROM node:16-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --force

# Copiar el resto del código
COPY . .

# Construir la aplicación (esto genera .next)
RUN npm run build

# Etapa 2: Servir la aplicación
FROM node:16-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos de la etapa anterior
COPY --from=build /app /app

# Instalar "next" globalmente si es necesario
RUN npm install -g next

# Exponer el puerto 3000 (o el que uses)
EXPOSE 3000

# Iniciar el servidor de Next.js en producción
CMD ["npm", "start"]
