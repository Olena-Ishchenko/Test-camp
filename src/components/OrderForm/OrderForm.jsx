import { useForm } from 'react-hook-form';
import css from './OrderForm.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const OrderForm = () => {
  const schemaValidation = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    bookingdate: Yup.date().min(new Date()).required('Date is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  return (
    <div className={css.orderContainer}>
      <h3 className={css.orderTitle}>Book your campervan now</h3>
      <p className={css.orderDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        className={css.form}
        onSubmit={handleSubmit(data => {
          console.log(data);
          reset();
        })}
      >
        <div className={css.inputContainer}>
          <input
            className={css.formInput}
            {...register('name', { required: true })}
            placeholder="Name"
          />
          {errors.name?.message && (
            <p className={css.errorMessage}>{errors.name?.message}</p>
          )}

          <input
            className={css.formInput}
            {...register('email', { required: true })}
            placeholder="Email"
          />
          {errors.email?.message && (
            <p className={css.errorMessage}>{errors.email?.message}</p>
          )}
          <input
            className={css.formInput}
            {...register('bookingdate', { required: true })}
            placeholder="Booking date"
          />

          {errors.bookingdate?.message && (
            <p className={css.errorMessage}>{errors.bookingdate?.message}</p>
          )}
          <input
            className={css.formInputComment}
            {...register('comment')}
            placeholder="Comment"
          />
        </div>
        <button className={css.formBtn} type="submit">
          {' '}
          Send{' '}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
