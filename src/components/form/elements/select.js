import { useFormContext } from "react-hook-form";

import { sanitize } from "../../../utils/string";

import css from "./select.module.css";

const Select = ({ name, options }) => {
  const { register } = useFormContext();

  return (
    <div className={css.form__field}>
      <label className={css.form__label} htmlFor={sanitize(name)}>
        {name}
      </label>

      <select
        className={css.form__select}
        id={sanitize(name)}
        {...register(sanitize(name))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
