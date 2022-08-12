from importlib_metadata import method_cache
import marshmallow as ma

from http.client import OK
from flask_smorest import Blueprint

from flask.views import MethodView

hc_bt = Blueprint(
    "healthchecks",
    __name__,
    url_prefix="/healthchecks",
    description="Healthcheck operations",
)


class HealtCheckResponse(ma.Schema):
    status = ma.fields.String()


class HealthCheckQuery(ma.Schema):
    status = ma.fields.String()


# @api.route('/')
@hc_bt.route("/")
class HealthCheck(MethodView):
    @hc_bt.arguments(HealthCheckQuery, location="query")
    @hc_bt.response(200, HealtCheckResponse(many=False))
    def get(self, kwargs):
        return {"status": "OK"}
