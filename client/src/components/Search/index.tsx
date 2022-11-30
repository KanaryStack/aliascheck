import { Box, Typography } from "@mui/material";
import SearchBox from "../Search/SearchBox";
import useStyles from "./styles";

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.container}>
      {/* <Typography variant="h5" mb={2}>
        search for username
      </Typography> */}

      <SearchBox />
    </Box>
  );
};

export default Search;
