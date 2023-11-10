# image de départ
FROM alpine:3.15 as builder

# chemin de travail
WORKDIR /usr/src/app

# installation des paquets système
# Comme on utilise Alpine et pas Ubuntu, apt n'est pas une commande reconnue, on utilise apk à la place.
RUN apk add --update npm

# ajout utilisateur node et groupe node
# Pas besoin de cela durant la phase de build
#RUN addgroup -S group_node && adduser -S node -G group_node

# rabaissement des privilèges
#USER $USERNAME

# copie des fichiers du dépôt
COPY . /usr/src/app

# installation des dépendances avec npm
RUN npm install

# build avec npm
RUN npm run build

# nouveau départ
FROM alpine:3.15 as runner

WORKDIR /usr/src/app

RUN apk add --update npm

RUN addgroup -S group_node && adduser -S node -G group_node
USER $USERNAME

#COPY --from=builder --chown=node:node /usr/src/app/ .
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/dist ./dist
COPY --from=builder --chown=node:node /usr/src/app/src ./src
#COPY --from=builder --chown=node:node /usr/src/app/src ./src

# Open the appropriate port
EXPOSE 4242

#CMD npm run start # Ici, on n'a pas utilité de index.ts
# Lanceent du conteneur pour communication simple :
#CMD node dist/getsysinfos

# Lancement du conteneur pour tests :
#CMD npx jest

# Lancement du conteneur pour tests, sans génération d'erreur
CMD npx jest --runInBand --forceExit
