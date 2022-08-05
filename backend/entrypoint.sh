#!/bin/sh

echo "Waiting for postgres..."

database=${DB:-web-db}

while ! nc -z $database 5432; do
  sleep 0.1
done

echo "PostgreSQL started"

python manage.py run -h 0.0.0.0
