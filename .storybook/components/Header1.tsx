// ./src/stories/Button.js

import React, { useMemo } from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "text-sm";
    }
    case "large": {
      return "text-lg";
    }
    case "medium": {
      return "text-base";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary ? "text-white bg-blue-500" : "text-slate-700 bg-green-500";

const getColor = (isPrimary) => {
    console.log(`text-${isPrimary}-500`)
    return `text-${isPrimary}-500`

 };

// const getBackgroundClasses = (isPrimary) => {
//   // console.log('hhhhhhhhhh',isPrimary)

//   console.log(`bg-[${isPrimary}]`);
//   return `bg-[${isPrimary}]`;
// };

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  primary = false,
  size = "medium",
  backgroundColor = "red",
  color = "red",
  label,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    // const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    const colorClass = getColor(color);
    // const backgroundClass = getBackgroundClasses(backgroundColor);

    return [sizeClass, colorClass].join(" ");
  }, [size, backgroundColor, color]);

  return (
    <h2 className={`${computedClasses}`} {...props}>
      {label}
    </h2>
  );
};
