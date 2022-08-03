import tweepy
import os
from app.platforms.response import AliasCheckResponse

from app.platforms.base import BasePlatformClient


class TwitterClient(BasePlatformClient):

    def get_authorized_api(self, consumer_key: str, consumer_secret: str) -> tweepy.API:
        auth = tweepy.OAuth2AppHandler(
            consumer_key=consumer_key,
            consumer_secret=consumer_secret
        )
        api = tweepy.API(auth)

        return api

    def check_alias(self, username: str) -> AliasCheckResponse:
      
        api = self.get_authorized_api(os.getenv("TWITTER_CONSUMER_KEY", "consumer_key"),
                                      os.getenv("TWITTER_CONSUMER_SECRET", "consumer_secret"))
        alias = AliasCheckResponse("twitter", username)
        try:
            response = api.get_user(screen_name=alias.username)
            alias.used = True
            alias.owner = response.name
            alias.date_used=response.created_at
        except:
            alias.used = False

        return alias


if __name__ == "main":
    client = TwitterClient()

    client.check_alias("danchi101")
