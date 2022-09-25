# **ALIAS CHECK**

The Alias Check helps confirm the availability of a username on different social networks. While it is intended as a learning project by the [Tech Interviews Nigeria](https://www.meetup.com/technicalinterviews/) that would introduce participants to different technologies in fullstack development, ranging from frontend technologies like [NextJS](https://nextjs.org/) to [NodeJS](https://nodejs.org/en/about/) and [SQLite](https://www.sqlite.org/index.html) or [Postgres](https://www.postgresql.org/) on the backend in addition to [Docker](https://www.docker.com/) for development, its utility is quite apparent. For example, small businesses can see the application in the selection of an available and catchy name among major social media platform.

This is project is structured so that the developer can choose to set it up with or without Docker.


<br />

# **PROJECT SETUP**
## **With Docker Compose**
To start the project using Docker, even from scratch, run the following command:

```bash
cp .env.sample .env
docker-compose up
```

Then go to [http://localhost:3000/](http://localhost:3000/) to access the **frontend** or [http://localhost:8080/](http://localhost:8080/) to access the **backend**

### **Backend-only Development**
For **backend developers** that might only need to run the `server` and `database`, run the following command:
```bash
docker-compose up server
```
### **Frontend-only Development**
For **frontend developers** who might not need access to the backend for the features they want to add, stop other services besides `client` after starting up:
```bash
docker-compose up && \
docker stop $(docker-compose ps --services | grep -v client)
```
<br>

Checkout docker-compose [documentation](https://docs.docker.com/compose/reference/) on some of the commandline features available.

## **Without Docker Compose**
Though this project was built for easy startup with Docker, it can also be run without Docker. You would need to run the commands on two terminals, one for the *frontend* and the other for the *backend*:

## **Frontend**
On one terminal, go to the frontend folder named `client`, install dependencies and run the development server:
```bash
cd client
npm install
npm run dev
```

You should now be able to see the frontend at [http://localhost:3000/](http://localhost:3000/)


## **Backend**
The backend requires authorization keys from the social media platforms that we support and will increase as time goes by:

- For twitter :Register for a twitter developer account at [twitter developer account](https://developer.twitter.com/) then create api keys. Of importance is the `Bearer Token` to which on our .env file populate the key `TWITTER_BEARER_TOKEN`


To start the backend application, make sure you have typescript installed on your system. Checkout [https://www.typescriptlang.org/download](https://www.typescriptlang.org/download). Once installed, run;
```bash
cp .env.sample .env
npm install
npm run dev
```


Access the application at the address [http://localhost:8080/health](http://localhost:8080/health)

### Testing
From the root directory;

```sh
npm run test
```

### UI / UX Resources
You may find some useful resources for improving the UI / UX of the app [here](https://www.figma.com/file/9KXFSDfZzIr9kaCEqpBsc5/Aliascheck%3A-Open-source?node-id=157%3A82).


