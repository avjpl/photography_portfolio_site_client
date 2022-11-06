import css from '../form.module.css';

const Button = ({ label, type = 'submit' }) => {
  return (
    <button className={css.form__btn} type={type}>
      {label}
    </button>
  );
};

export default Button;
