import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const { label, ...otherProps } = props;
  return (
    <label htmlFor="name">
      {label}
      <input id="name" ref={ref} {...otherProps} />
    </label>
  );
});

export default Input;
