function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  label,
}) {
  return (
    <div className="booking__field">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
