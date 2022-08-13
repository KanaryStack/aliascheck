FROM python:3.8.13-slim

# install netcat

RUN apt-get update \
    && apt-get -y install netcat \
    && apt-get clean

RUN pip install pipenv

# copy the requirements txt file
COPY requirements.txt requirements.txt

# install the dependencies
RUN pip3 install -r requirements.txt

# set working directory
WORKDIR /app

# copy source files
COPY . /app

# expose port
EXPOSE 5000

# run server
CMD ["/app/entrypoint.sh"]