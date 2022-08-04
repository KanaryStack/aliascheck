# Setup

Use this guide if you do NOT want to use Docker in your project.

## Getting Started

Create and activate a virtual environment, and then install the requirements.



### Set Environment Variables

Update *project/server/config.py*, and then run:

```sh
$ export APP_NAME="ALIAS CHECK API"
$ export APP_SETTINGS="app.config.ProductionConfig"
$ export FLASK_DEBUG=0
$ export TWITTER_CONSUMER_KEY="your twitter consumer key here"
$ export TWITTER_CONSUMER_SECRET="your twitter consumer secret key here"
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
