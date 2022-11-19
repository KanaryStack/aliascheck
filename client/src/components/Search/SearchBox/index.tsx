import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import { ChangeEvent } from "react";
import { theme } from "../../../utils/theme";
import { useUserInfo } from "../../../utils/userInfoContext";
import useStyles from "./styles";

const SearchBox: React.FC = () => {
  const classes = useStyles();
  const { setUsername } = useUserInfo();

  return (
    <Stack component="form" className={classes.container}>
      <Box className={classes.inputGroup}>
        <TextField
          fullWidth
          label="Enter username"
          id="username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          required
          aria-required="true"
        />
        <Typography data-testid="hint">
          By using our service you accept our Terms of Service and Privacy
          Policy.
        </Typography>
      </Box>
      <Button type="submit" className={classes.button} variant="contained">
        search
      </Button>
    </Stack>
  );
};

export default SearchBox;
