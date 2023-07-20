export const Input = ({ register, errors, ...props }) => {
  return (
    <div className="form-group mb-2" {...register(props.name)}>
      <input {...props}></input>
      <p className="error-message">{errors[props.name]?.message}</p>
    </div>
  );
};
