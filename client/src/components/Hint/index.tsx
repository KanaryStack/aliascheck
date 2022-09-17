import useStyles from "./styles";
import {
  MdOutlineContentCopy,
  MdModeEditOutline,
  MdOutlineCheck,
} from "react-icons/md";

const hints = [
  {
    id: 1,
    icon: <MdModeEditOutline />,
    description: "Enter username",
  },
  {
    id: 2,
    icon: <MdOutlineContentCopy />,
    description: "Search if username is available",
  },
  {
    id: 3,
    icon: <MdOutlineCheck />,
    description: "Copy available usernames",
  },
];

const index = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <h3>how it works</h3>
      <div className={classes.hintGroup}>
        {hints.map((hint) => (
          <div className={classes.hint} key={hint.id}>
            <div>{hint.icon}</div>
            <p>{hint.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
