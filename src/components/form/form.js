import { Children, cloneElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import {Button, Input, TextArea, Select} from './';

import css from './form.module.css';

const Form = ({ children }) => {
  const { handleSubmit, ...rest } = useForm();
  const onSubmit = (data) => {
    // transformers here, if needed.
    console.log(data);
  }

  return (
    <FormProvider {...rest}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {});
          })}
        </>
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Select = Select;
Form.Button = Button;
Form.TextArea = TextArea;

export default Form;
