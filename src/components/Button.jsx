import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  const { children, className } = props;
  return (
    <button ref={ref} className={`font-medium py-2 px-4 ${className}`}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
