import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...props}
    />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
