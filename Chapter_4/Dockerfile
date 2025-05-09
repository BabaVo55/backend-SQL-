# Contains - we contain our application - like its own mini environment

# User an official node.js runtime as a parent image - 
# Image - Snap shot of separate instruction sheet. when we build our container, we are creating a snapshot of that environment 
FROM node:22-alpine

# Set the working directory in the container;
WORKDIR /app

# We need to copy the files from our local project to this new environment.
# Copy the package.json and the package.json.lock files to our container.
COPY package*.json .

# Next instal all dependencies
RUN npm install

# Finally rest of the application code
COPY . .