# Basic Image
FROM node:boron

# Machine Infomation
MAINTAINER chenxuhua0530@gmail.com

# Step 1: Create Folder
RUN mkdir -p /usr/src/app

# Step 2: Setting Work Space
WORKDIR /usr/src/app


# Just Setting Nodejs Environment Variable
ENV NODE_ENV=production

# Step 3: Copy Package Json And bower Json File
COPY /node-workbench/package.json /usr/src/app
COPY /node-workbench/.bowerrc /usr/src/app
COPY /node-workbench/bower.json /usr/src/app

# Step 4: npm and bower Install Package
RUN npm install -g gulp bower \
    && npm install \
    && bower install --allow-root

# Step 5: Copy Other File To Work Space
COPY /node-workbench /usr/src/app

# Step 6: Export Port 3000
EXPOSE 3000

# Start Command
CMD ["npm","start"]

