import { useForm } from 'react-hook-form';

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('Name', { required: true })} placeholder="Name" />

        <input {...register('Email', { required: true })} placeholder="Email" />
        <input
          {...register('Booking date', { required: true })}
          placeholder="Booking date"
        />
        <input {...register('Comment')} placeholder="Comment" />
        <button type="submit"> Send </button>
      </form>
    </div>
  );
};

export default OrderForm;
