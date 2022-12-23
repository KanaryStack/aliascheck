import useStyles from "./styles";
import { Typography, Grid, Box, Input, TextField, Button } from "@mui/material";

const Newsletter = () => {
  const classes = useStyles();
  const handleChange = () => {};
  return (
    <div>
      <Box>
        <TextField
          id="email"
          placeholder="johndoe@shuffle.dev"
          type="email"
          autoComplete="current-email"
          // variant="outlined"
          onChange={handleChange}
          className={classes.input}
          size="small"
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          href="#text-buttons"
          size="small"
          className={classes.submit}
          onClick={() => {
            alert("Submitted");
          }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};
export default Newsletter;
