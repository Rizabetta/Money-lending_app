import { useForm, SubmitHandler } from "react-hook-form";
import "./Prescoring.scss";
import { useState } from "react";

type Inputs = {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  email: string;
  birthdate: string | Date;
  passportSeries: string;
  passportNumber: string;
};

const term = [
  { titel: "6 month", value: 6 },
  { titel: "12 month", value: 12 },
  { titel: "18 month", value: 18 },
  { titel: "24 month", value: 24 },
];

function Prescoring({ buttonRef }: any) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  let step = 1;
  let [amount, setAmount] = useState(150000);
  // let amount = 150000;
  return (
    <section className="prescoring" ref={buttonRef}>
      <div className="prescoring__topcontainer">
        <div className="prescoring__leftsection">
          <div className="prescoring__step">
            <h3>Customize your card</h3>
            <p>Step {step} of 5</p>
          </div>
          <div className="prescoring__selectamount">
            <p>Select amount</p>
            <p>{amount.toLocaleString('ru-RU')}</p>
            <input
              type="range"
              min="15000"
              max="600000"
              step="1000"
              data-orientation="vertical"
              onChange={(i) => setAmount(Number(i.target.value))}
            ></input>
            <div className="prescoring__selectamount__maxmin">
              <p>15 000</p>
              <p>600 000</p>
            </div>
          </div>
        </div>
        <div className="prescoring__rightsection">
          <h4>You have chosen the amount</h4>
          <input
            type="number"
            max="600000"
            min="15000"
            onChange={(i) => setAmount(Number(i.target.value))}
          />
          <hr></hr>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Contact Information</h3>
        <div className="prescoring__information">
          <div>
            <p>Your last name</p>
            <input
              placeholder="For Example Doe"
              {...register("lastName", { required: true })}
            />
          </div>
          <div>
            <p>Your first name</p>
            <input
              placeholder="For Example Jhon"
              {...register("firstName", { required: true })}
            />
          </div>
          <div>
            <p>Your patronymic</p>
            <input
              placeholder="For Example Victorovich"
              {...register("patronymic")}
            />
          </div>
          <div>
            <p>Select term</p>
            <select {...register("term", { required: true })}>
              {term.map((item, key) => (
                <option key={key} value={item.value}>
                  {item.titel}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Your email</p>
            <input
              placeholder="test@gmail.com"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <p>Your date of birth</p>
            <input
              placeholder="Select Date and Time"
              {...register("birthdate", { required: true })}
            />
          </div>
          <div>
            <p>Your passport series</p>
            <input
              placeholder="0000"
              {...register("passportSeries", { required: true })}
            />
          </div>
          <div>
            <p>Your passport number</p>
            <input
              placeholder="000000"
              {...register("passportNumber", { required: true })}
            />
          </div>
        </div>

        <button className="defaultButton" type="submit">
          Contiue
        </button>
      </form>
    </section>
  );
}

export default Prescoring;
