import { useEffect, useState } from "react";

export const CheckBox = ({ value, setValue, active }) => {
  const [checked, setChecked] = useState(active);

  useEffect(() => {
    setChecked(active);
  }, [active]);

  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={value}
        value={value}
        onClick={() => setValue(value)}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="form-check-label" htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default CheckBox;
