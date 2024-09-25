import { Box } from "@mui/material";
import SearchBox from "../Search/SearchBox";
import useStyles from "./styles";

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.container}>
      <SearchBox />
    </Box>
  );
};

export default Search;
