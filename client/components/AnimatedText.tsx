import React from "react";
import { motion } from "framer-motion";

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
 *    as:
 *        AnimatedCharacters is polymorphic - use the as Props to specify
 *        the type of HTMLElement
 *        example: <AnimatedCharacters as='div' />
 * 
 *    Children:
 *        AnimatedCharacters accepts children props. The Child element
 *        is not animated and will be shown on the screen before, during
 *        and after the animation cycle.
 *        example: <AnimatedCharacters>The Frontend Team</AnimatedCharacters>
 * 
 *    Text:
 *        This props accepts the text to be animated.
 *        example: <AnimatedCharacters as="h1" text="We love to code" />
 * 
 *    ...restProps:
 *        This populate the component with attributes that are valid for a
 *         a given as prop value.
 *         example: <AnimatedCharacters as="a" href="#" text="Maxwell Codes" />
 *         href attribute is valid for a tag and will be accepted as an attribute.
 * 
 * 
 *  __CORE DEPENDENCY__
 *       This animation is built upon FRAMER-MOTION
 * 
 * -----------------------------------------------------------------------------------------
 */



interface IWrapper {
  children: React.ReactNode;
}

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
  as?: C;
  children?: React.ReactNode;
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
 * --------------------------WRAPPER FUNCTION--------------------------
 *
 * The wrapper is used to encapsulate individual text to be
 * animated.
 * We will do this to prevent wrapping of words using CSS
 * ---------------------------------------------------------
 */
const Wrapper = (props: IWrapper) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

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
  ...restProps
}: AnimatedCharactersProps<C>) => {
  const Component = as || "span";

  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
    },
    visible: {
      y: 0,
      color: "#FF0088",
      fontSize: "3rem",
      fontWeight: "bold",
      transition: { type: "spring", stiffness: 100, damping: 5 },
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
    <Component {...restProps} className="flex justify-center items-center flex-col space-y-6">
      {words.map((_, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
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
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {children}
    </Component>
  );
};

export default AnimatedCharacters;
