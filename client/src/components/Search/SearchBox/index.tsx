import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import { useTheme } from "next-themes";
import { ChangeEvent } from "react";
import { useUserInfo } from "../../../utils/userInfoContext";
import useStyles from "./styles";

const SearchBox: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const classes = useStyles();
  const { setUsername } = useUserInfo();
  const placeholderColor = resolvedTheme === "light" ? "black" : "white";
  return (
    <Stack component="form" className={classes.container}>
      <Box className={classes.inputGroup}>
        <TextField
          sx={{
            ".mui-style-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              color: placeholderColor,
            },
          }}
          fullWidth
          label="Enter username"
          placeholder="aliasCheck"
          id="username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          variant="outlined"
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
