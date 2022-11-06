import classnames from 'classnames';
import { useFormContext, useFormState } from "react-hook-form";

import { sanitize } from "../../../utils/string";

import css from "./input.module.css";

const InputField = ({ name, placeholder, minLength, maxLength }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const fieldName = sanitize(name);

  return (
    <div className={css.form__field}>
      <input
        className={classnames(`${css.form__input}`, {
          [css['form__input--error']]: errors[fieldName]?.type === 'required',
        })}
        placeholder={placeholder}
        id={fieldName}
        {...register(fieldName, { required: true, minLength, maxLength })}
      />
    </div>
  );
};

export default InputField;
