import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.api.healthcheck import hc_bt 
from flask_smorest import Api
db=SQLAlchemy()
migrate=Migrate()

def create_app(script_info=None):

    # instantiating the app
    app=Flask(
        __name__        
    )
    
    # set config
    app_settings=os.getenv(
        "APP_SETTINGS","app.config.ProductionConfig"
    )

    app.config.from_object(app_settings)
  
    api=Api(app)

    # setup extensions
    # database initialization
    db.init_app(app=app)
    migrate.init_app(app=app,db=db)
    
    # register migrations here
    api.register_blueprint(hc_bt)

   
    return app
