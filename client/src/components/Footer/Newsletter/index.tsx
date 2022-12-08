import useStyles from "./styles";
import { Typography, Grid, Box, Input, TextField, Button } from "@mui/material";

const Newsletter = () => {
  const classes = useStyles();
  const handleChange = () => {};
  return (
    <div>
      <Box>
        <TextField
          // fullWidth
          id="email"
          placeholder="johndoe@shuffle.dev"
          type="email"
          autoComplete="current-email"
          variant="outlined"
          onChange={handleChange}
          sx={{
            width: "95%",
            background: "white",
            "::placeholder": {
              color: "#000",
            },
          }}
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
