# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Disable ESLint temporarily for production build
ENV NEXT_DISABLE_ESLINT=1

# Build the Next.js app (this creates the .next directory)
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the Next.js production server
CMD ["yarn", "start"]
