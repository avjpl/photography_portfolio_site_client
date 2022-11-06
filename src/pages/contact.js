import Form from '../components/form/form';

import css from '../../static/styles/contact.module.css';

const Contact = () => {
  return (
    <div className={css.contact}>
      <Form>
        <div className={css['contact__left--col']}>
          <Form.Input name='name' placeholder='Your Name' />
          <Form.Input name='email'  placeholder='Your Email' />
          <Form.Input name='number' placeholder='Your Contact Number' />
        </div>

        <div className={css['contact__right--col']}>
          <Form.TextArea placeholder='How Can I Help' name={'help'} />
        </div>

        <Form.Button label='Submit' />
      </Form>
    </div>
  );
};

export default Contact;
