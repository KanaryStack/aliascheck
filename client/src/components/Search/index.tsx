import SearchBox from "../Search/SearchBox";
import useStyles from "./styles";

const index: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <h3>search for username</h3>
      <SearchBox />
      <span>See suggestion</span>
    </section>
  );
};

export default index;
