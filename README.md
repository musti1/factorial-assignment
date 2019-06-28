# Factorial Assignment Backend

Available Scripts
In the project directory, you can run:

### Prerequisites
What things you need to install the software and how to install them
```
Node 10+
NPM 6.5.9+
Docker
Docker Compose

```
### Building
A step by step series of examples that tell you how to get a development env running

First we will start with initializing all dependencies
```
npm i
```

Next for setup we will mount our .env file

```
ln -s .env.example .env
```
At last we can build everything using 

```
node-gyp build
```
### Run Server
```
npm run start
```

