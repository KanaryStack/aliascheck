import abc


from app.platforms.response import AliasCheckResponse


class BasePlatformClient:
    @abc.abstractmethod
    def check_alias(self, alias: str) -> AliasCheckResponse:
        pass
