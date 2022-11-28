import useStyles from "./styles";

const Newsletter = () => {
  const classes = useStyles();
  return (
    <div className={classes.inputItems}>
      <input
        type="email"
        placeholder="johndoe@shuffle.dev"
        onChange={(e) => e.target.value}
      />
      <button className={classes.submit}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
