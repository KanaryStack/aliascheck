import marshmallow as ma
from flask_smorest import Blueprint
from flask.views import MethodView

from app.platforms.twitter.client import TwitterClient
from app.platforms.base import AliasCheckResponse


alias_bt = Blueprint(
    "alias", __name__, url_prefix="/aliases", description="alias check endpoints"
)


class AliasResponse(ma.Schema):
    used = ma.fields.Boolean(
        description="Indicator whether a username is already taken"
    )
    date_used = ma.fields.DateTime(
        description="Indicates the date the username was taken, null if the username is not taken.",
        allow_none=True,
    )
    username = ma.fields.String(description="The username being checked")
    owner = ma.fields.String(
        description="The name of the user who owns the username as on the platform."
    )
    platform = ma.fields.String(description="The name of the platform")


class AliasQuery(ma.Schema):
    username = ma.fields.String(description="The username to check against.")


@alias_bt.route("/")
class AliasCrud(MethodView):
    @alias_bt.response(200, AliasResponse(many=True))
    @alias_bt.arguments(AliasQuery, location="query")
    def get(self, kwargs):
        print(kwargs)
        username = kwargs["username"]
        responses = []
        client = TwitterClient()
        response = client.check_alias(username)
        print(f"obtained response {response}")
        responses.append(response)
        return responses
