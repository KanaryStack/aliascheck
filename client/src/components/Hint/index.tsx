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
    icon: <MdOutlineCheck />,
    description: "Search if username is available",
  },
  {
    id: 3,
    icon: <MdOutlineContentCopy />,
    description: "Copy available usernames",
  },
];

const Hint: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <h2>How it works</h2>
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

export default Hint;
