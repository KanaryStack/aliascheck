FROM python:3.8.13-slim

# install netcat

RUN apt-get update \
    && apt-get -y install netcat \
    && apt-get clean

RUN pip install pipenv

# copy pipfile
COPY [ "Pipfile" ,"Pipfile.lock","./"]

# set up packages 
RUN pipenv install --system --deploy


# set working directory
WORKDIR /app

# copy source files
COPY . /app

# expose port
EXPOSE 5000

# run server
CMD ["./entrypoint.sh"]