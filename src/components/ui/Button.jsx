function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${fullWidth ? "btn--full" : ""} ${disabled ? "btn--disabled" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
