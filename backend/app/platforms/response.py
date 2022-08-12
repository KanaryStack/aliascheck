from datetime import datetime


class AliasCheckResponse:
    used = False
    date_used = None
    username = ""
    owner = ""
    platform = ""

    def __init__(
        self,
        platform: str,
        username: str,
        used: bool = False,
        date_used: datetime = None,
        owner: str = None,
    ) -> None:
        self.platform = platform
        self.username = username
        self.used: bool = used
        self.date_used: datetime = date_used
        self.owner: str = owner

    def __str__(self) -> str:
        return f"{self.platform}:{self.username}:{self.used}"
