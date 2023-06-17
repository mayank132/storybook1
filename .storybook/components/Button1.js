// ./src/stories/Button.js

import React, { useMemo } from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary ? "text-white bg-blue-500" : "text-slate-700 bg-green-500";

const getBackgroundClasses = (isPrimary) => {
  // console.log('hhhhhhhhhh',isPrimary)

  console.log(`bg-[${isPrimary}]`);
  return `bg-[${isPrimary}]`;
};

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor = "red",
  label,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    const backgroundClass = getBackgroundClasses(backgroundColor);

    return [modeClass, sizeClass, backgroundClass].join(" ");
  }, [primary, size, backgroundColor]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
