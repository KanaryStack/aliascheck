import SearchBox from "../Search/SearchBox";
import useStyles from "./styles";

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <h3>search for username</h3>
      <SearchBox />
    </section>
  );
};

export default Search;
