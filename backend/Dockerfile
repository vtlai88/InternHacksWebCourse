FROM node:8
#package management

# WORKDIR: similar to cd
WORKDIR /usr/src/app

COPY package.json .
COPY index.js .

RUN npm install
#run on Dock container

EXPOSE 8080
#for docker networking in that container
#docker can have multiple container

CMD [ "npm", "start" ]


#in terminal
# docker build -t <image_name> <directory to look into>
# docker images  : check if image created
# docker rmi <imageID>

# docker run -it -p 8080:8080 <image_name>

#-p is pair

#docker ps 
#docker exec -it <container_id> /bin/bash : specifying which shelf we are using

# ps -ef | grep node :ps command -> dump all processes

#grep : search command

#curl -X GET http://localhost:8080/healthCheck
#curl to hit api from termina
#-X is clarify the htp verb

#local host differet between on my computer/terminal to docker
#docker: 8090, computer: 8080