# Docker Setup

Use this guide if you want to use Docker in your project.

> Built with Docker v18.03.1-ce.

## Getting Started

Update the environment variables in *docker-compose.yml*, and then build the images and spin up the containers:

* Of particular importance are this two variables 
  - TWITTER_CONSUMER_KEY=twitter_consumer_key_here
  - TWITTER_CONSUMER_SECRET=twitter_consumer_secret_here
    

```sh
$ docker-compose up -d --build
```

By default the app is set to use the production configuration. If you would like to use the development configuration, you can alter the `APP_SETTINGS` environment variable:

```
APP_SETTINGS="app.config.DevelopmentConfig"
```


Create the database:
-
```sh
$ docker-compose run web python manage.py create-db
$ docker-compose run web python manage.py db init
$ docker-compose run web python manage.py db migrate
```

Access the application at the address [http://localhost:5000/](http://localhost:5000/)

### Testing

Test without coverage:

```sh
$ docker-compose run web python manage.py test
```

Test with coverage:

```sh
$ docker-compose run web python manage.py cov
```

Lint:

```sh
$ docker-compose run web flake8 project
```
