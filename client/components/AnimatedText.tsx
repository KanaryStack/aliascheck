import { motion, Variants } from "framer-motion";

/**
 * -----------------------------AnimatedCharacters----------------------------------
 *
 *  __USAGE__ && __Definitions__
 *
 *    accepts: {
 *                as: string,
 *                children: React.ReactNode,
 *                text: string,
 *                ...restProps: React.ComponentProps
 *           }
 *
 *    as: [Optional - Default = <span>]
 *        AnimatedCharacters is polymorphic - use the as Props to specify
 *        the type of HTMLElement
 *        example: <AnimatedCharacters as='div' />
 *
 *    Children: [Optional]
 *        AnimatedCharacters accepts children props. The Child element
 *        is not animated and will be shown on the screen before, during
 *        and after the animation cycle.
 *        example: <AnimatedCharacters>The Frontend Team</AnimatedCharacters>
 *
 *    Text: [Required]
 *        This props accepts the text to be animated.
 *        example: <AnimatedCharacters as="h1" text="We love to code" />
 *
 *    ...restProps:
 *        This populate the component with attributes that are valid for a
 *         a given as prop value.
 *         example: <AnimatedCharacters as="a" href="#" text="Maxwell Codes" />
 *         href attribute is valid for a tag and will be accepted as an attribute.
 *
 *     Delay: [Optional - Default = 0]
 *         This is used to set a time delay should you want the Animated characters
 *          to be delayed for rendering
 *
 *      Size: [Optional - defaults = 1rem || 16px]
 *          This is used to set the css font-size of the Text to be animated.
 *
 *
 *
 *  __CORE DEPENDENCY__
 *       This animation is built upon FRAMER-MOTION
 *
 * -----------------------------------------------------------------------------------------
 */

/**
 * --------------------------GENERICS-----------------------
 * Based on the type of as, represented by the generic C,
 * React.componentPropsWithoutRef will return valid component
 * props that correlates with the string attribute passed to the as prop.
 * example: <AnimatedCharacter as='a' href='#' />
 * ----------------------------------------------
 */
type AnimatedCharactersProps<C extends React.ElementType> = {
  text: string;
  size: string;
  as?: C;
  children?: React.ReactNode;
  delay?: string;
} & React.ComponentPropsWithoutRef<C>;

/**
 *  --------------------------REFACTOR--------------------------
 * we can REFACTOR the above GENERICS to be
 *
 * type AnimatedCharactersProps<C extends React.ElementType> = {
 *    text: string;
 *    as?: C;
 * };
 *
 * type Props<C extends React.ElementType> = React.PropsWithChildren<
 *  AnimatedCharactersProps<C>
 * > &
 *  React.ComponentPropsWithoutRef<C>;
 *
 * Then use Props<C> in the Functional Component props type
 * -----------------------------------------------------------
 */

/**
 * ---------------------------ANIMATED CHARACTERS--------------------
 * Handles the deconstruction of each word and character to setup for the
 * individual character animations
 * -----------------------------------
 */
const AnimatedCharacters = <C extends React.ElementType = "span">({
  text,
  as,
  children,
  delay = "0",
  size,
  ...restProps
}: AnimatedCharactersProps<C>) => {
  const Component = as || "span";

  // Framer Motion variant object, for controlling animation
  const item: Variants = {
    hidden: {
      y: "200%",
      color: "#0055FF",
    },
    visible: {
      y: 0,
      color: "#FF0088",
      fontWeight: "700",
      fontFamily: "poppins",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 5,
        delay: Number(delay),
      },
    },
  };

  //  Split each word of props.text into an array
  const splitWords: string[] = text.split(" ");

  // Create storage array for each character of each word grouped in an array
  // example: [['M','a','x','w','e','l','l'], ['c','o','d','e','s']]
  const words: string[][] = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  // example: [['M','a','x','w','e','l','l',"\u00A0"], ['c','o','d','e','s',"\u00A0"]]
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <Component {...restProps}>
      <span className="container whitespace-nowrap">
        {words.map((_, index) => {
          return (
            <span key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                    }}
                    key={index}
                  >
                    <motion.span
                      style={{
                        display: "inline-block",
                        fontSize: `${size ?? "1rem"}`,
                      }}
                      initial="hidden"
                      animate="visible"
                      variants={item}
                    >
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
      {children}
    </Component>
  );
};

export default AnimatedCharacters;
