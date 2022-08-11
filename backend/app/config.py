import os

basedir = os.path.abspath(os.path.dirname(__file__))


class BaseConfig:
    """Base Configuration"""

    APP_NAME = os.getenv("APP_NAME", "{{}alias.app_name}")
    DEBUG_TB_ENABLED = False
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_ENABLED = False
    API_VERSION = 0.1
    API_TITLE = "API_alias_check"
    OPENAPI_VERSION = "3.0.2"
    OPENAPI_URL_PREFIX = "/"

    OPENAPI_REDOC_PATH = "/"
    OPENAPI_REDOC_URL = (
        "https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"
    )
    OPENAPI_SWAGGER_UI_PATH = "/swagger-ui"
    OPENAPI_SWAGGER_UI_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/"

    OPENAPI_RAPIDOC_PATH = "/rapidoc"
    OPENAPI_RAPIDOC_URL = "https://unpkg.com/rapidoc/dist/rapidoc-min.js"
    API_SPEC_OPTIONS = {
        "info": {
            "description": "This is the backend API for alias check",
            "termsOfService": "http://helloreverb.com/terms/",
            "contact": {"email": "kiptoonkipkurui@gmail.com"},
            "license": {
                "name": "MIT License",
                "url": "https://fr.wikipedia.org/wiki/Licence_MIT",
            },
        }
    }


class DevelopmentConfig(BaseConfig):
    """Development Configuration"""

    DEBUG_TB_ENABLED = True
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL", "sqlite:///{0}".format(os.path.join(basedir, "dev.db"))
    )


class TestingConfig(BaseConfig):
    """Testing configuration"""

    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_TEST_URL", "sqlite:///")
    TESTING = True


class ProductionConfig(BaseConfig):
    """Production configuration"""

    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL", "sqlite:///{0}".format(os.path.join(basedir, "prod.db"))
    )
