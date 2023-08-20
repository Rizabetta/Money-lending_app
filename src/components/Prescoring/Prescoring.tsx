import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;

  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  birthdate: string | Date;
  passportSeries: string;
  passportNumber: string;
};

function Prescoring({buttonRef}:any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


  return (
    <section className="prescoring" ref ={buttonRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Contact Information</h3>

        <input {...register("amount")} />
        <input {...register("firstName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    
    </section>
  );
}

export default Prescoring;
