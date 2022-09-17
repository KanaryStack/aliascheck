import { ChangeEvent } from "react";
import { useUserInfo } from "../../utils/userInfoContext";
import useStyles from "./styles";

const index = () => {
  const classes = useStyles();
  const { setUsername } = useUserInfo();

  return (
    <div className={classes.container}>
      <div className={classes.inputGroup}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <p>
          By using our service you accept our Terms of Service and Privacy
          Policy
        </p>
      </div>
      <button className={classes.button}>search</button>
    </div>
  );
};

export default index;
