export type dataType = {
  username: string;
  platforms: {
    exists: boolean;
    platform: string;
  }[];
};

export const data: dataType = {
  username: "maxwell",
  platforms: [
    {
      exists: true,
      platform: "twitter",
    },
    {
      exists: true,
      platform: "youtube",
    },
  ],
};

// REST endpoint http://localhost:8080/aliases?username=maxwell
