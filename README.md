# **ALIAS CHECK**

The Alias Check helps confirm the availability of a username on different social networks. While it is intended as a learning project by the [Tech Interviews Nigeria](https://www.meetup.com/technicalinterviews/) that would introduce participants to different technologies in fullstack development, ranging from frontend technologies like [NextJS](https://nextjs.org/) to [Flask](https://flask.palletsprojects.com/) and [SQLite](https://www.sqlite.org/index.html) or [Postgres](https://www.postgresql.org/) on the backend in addition to [Docker](https://www.docker.com/) for development, its utility is quite apparent. For example, small businesses can see the application in the selection of an available and catchy name among major social media platform.

This is project is structured so that the developer can choose to set it up with or without Docker.


<br />

# **PROJECT SETUP**
## **Cloning Project**
Clone this repo and change directory into the project root folder by running the following commands:

```bash
git clone https://github.com/KanaryStack/aliascheck.git
```
>NOTE:
>If you have setup an SSH connection to this repo, you can run this command instead:
>```bash
>git clone git@github.com:KanaryStack/aliascheck.git
>```

then switch to the project root folder like so:
```bash
cd aliascheck
```

## **With Docker Compose**
To start the project using Docker, even from scratch, run the following command:

```bash
docker-compose up
```

Then go to [http://localhost:3000/](http://localhost:3000/) to access the **frontend** or [http://localhost:5000/](http://localhost:5000/) to access the **backend**

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

> **NOTES:**
>
> Add a `-d` switch to turn off logging and run the containers in detached mode
> ```bash
> docker-compose up -d
> ```
> or
> ```bash
> docker-compose up -d server
> ```
> While running in detached mode, you can view the logs at any time by running this command:
> ```bash
> docker-compose logs
> ```
> You can check the logs of any one of the three services (*client*, *server* and *db*) running in detached mode like so:
> ```bash
> docker-compose logs <service-name>
> ```
> To continue the streaming the log output, add an `-f` switch:
> ```bash
> docker-compose logs -f <service-name>
> ```
### **Rebuilding Container images**
There might be need to rebuild any of the containers. For example, if the data in [create.sql](backend/app/db/create.sql) changes, you can rebuild the database container by running the command:
```bash
docker-compose build db
```
### **Force Restarting Containers**
In some cases, starting the containers after shutting them down may result in some errors, especially if you make changes affecting the container images. In this case, you can rebuild the container images while starting up the containers:
```bash
docker-compose up --build --force-recreate
```

### **Shutting Down Containers**
You can also wind down the containers to pause development by running the following command:
```bash
docker-compose down
```

## **Without Docker Compose**
Though this project was built for easy startup with Docker, it can also be run without Docker. You would need to run the commands on two terminals, one for the *frontend* and the other for the *backend*:

## **Frontend**
On one terminal, go to the frontend folder named `client`, install dependencies and run the development server:
```bash
cd client
npm install
npm run dev
```


## **Backend**
On another terminal, create and activate a virtual environment, and then install the requirements.

### Set Environment Variables

Update *project/server/config.py*, and then run:

```sh
$ cd backend
$ export APP_NAME="ALIAS CHECK API"
$ export APP_SETTINGS="app.config.ProductionConfig"
$ export FLASK_DEBUG=0
```
By default the app is set to use the production configuration. If you would like to use the development configuration, you can alter the `APP_SETTINGS` environment variable:

```sh
$ export APP_SETTINGS="app.config.DevelopmentConfig"
```

Using [Pipenv](https://docs.pipenv.org/) Use the *.env* file to set environment variables:

```
APP_NAME="ALIAS CHECK API"
APP_SETTINGS="app.config.DevelopmentConfig"
FLASK_DEBUG=1
```

### Create DB

```sh
$ python manage.py create-db
$ python manage.py db init
$ python manage.py db migrate
```

### Run the Application


```sh
$ python manage.py run
```

Access the application at the address [http://localhost:5000/](http://localhost:5000/)

### Testing

Without coverage:

```sh
$ python manage.py test
```

With coverage:

```sh
$ python manage.py cov
```

Run flake8 on the app:

```sh
$ python manage.py flake
```

or

```sh
$ flake8 project
```
