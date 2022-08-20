import "./button.css"

export const Button = ({ colorScheme, variant, size }) => {
  return (
    <button
      className={`btn  ${colorScheme || "white"} ${variant || "solid"} ${
        size || "md"
      }`}
    >
      Click Me
    </button>
  );
};
