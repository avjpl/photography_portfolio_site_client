import classnames from 'classnames';
import { useFormContext, useFormState } from "react-hook-form";

import { sanitize } from "../../../utils/string";

import css from "./textArea.module.css";

const TextArea = ({ name, placeholder }) => {
    const { register } = useFormContext();
    const { errors } = useFormState();

    const fieldName = sanitize(name);

    return (
        <div className={css.form__field}>
            <textarea
                className={classnames(`${css.form__textArea}`, {
                    [css['form__textArea--error']]: errors[fieldName]?.type === 'required',
                })}
                rows="5"
                cols="150"
                id={sanitize(fieldName)}
                placeholder={placeholder}
                {...register(sanitize(fieldName), { required: true })}
            />
        </div>
    );
};

export default TextArea;
