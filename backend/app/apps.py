import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.api.healthcheck import hc_bt
from flask_smorest import Api
from app.api.models import db
from app.bcrypt import bcrpt
from app.api.alias import alias_bt


migrate = Migrate()


def create_app(script_info=None):
    # instantiating the app
    app = Flask(__name__)

    # set config
    app_settings = os.getenv("APP_SETTINGS", "app.config.DevelopmentConfig")

    app.config.from_object(app_settings)

    api = Api(app)

    # setup extensions
    # database initialization
    db.init_app(app=app)
    migrate.init_app(app=app, db=db)

    # brypt initialization
    bcrpt.init_app(app)

    # register migrations here
    api.register_blueprint(hc_bt)
    # api.register_blueprint(user_bt)
    api.register_blueprint(alias_bt)

    return app
