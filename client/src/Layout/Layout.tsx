import useStyles from "./styles";
import Content from "../Content/Content";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <main className={classes.main}>
          <Content />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
