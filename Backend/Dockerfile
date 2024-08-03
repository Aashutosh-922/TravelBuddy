# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the application port (assuming the app runs on port 3000)
EXPOSE 3000

# Step 7: Define the command to run your application
CMD ["node", "server.js"]
