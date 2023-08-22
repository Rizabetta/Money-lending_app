import { useForm, SubmitHandler } from "react-hook-form";
import "./Prescoring.scss";
import { useState } from "react";
// {
//   "amount": 1000000,
//   "term": 24,
//   "firstName": "Ivan",
//   "lastName": "Ivanov",
//   "middleName": "Ivanonovich",
//   "email": "iivanov@email.ru",
//   "birthdate": "2023-08-20",
//   "passportSeries": "1234",
//   "passportNumber": "123456"
// }
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

const temp = ["firstName", "lastName"];

const current = new Date();
const minDate = `${current.getFullYear() - 18}-${
  current.getMonth() + 1
}-${current.getDate()}`;

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
            <p className="prescoring__selectamount-p">
              {amount.toLocaleString("ru-RU")}
            </p>
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
            {...register("amount", { required: true })}
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
          {/* {temp.map((item, key) => (
            <div key={key}>
              <p>Your patronymic</p>
              <input
                placeholder="For Example Victorovich"
                {...register("patronymic")}
              />
            </div>
          ))} */}
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
              type="email"
              placeholder="test@gmail.com"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <p>Your date of birth</p>
            <input
              type="date"
              min={minDate}
              placeholder="Select Date and Time"
              {...register("birthdate", { required: true })}
            />
          </div>
          <div>
            <p>Your passport series</p>
            <input
              type="number"
              min="0000"
              max="9999"
              placeholder="0000"
              // minLength={4}
              // maxLength={4}
              {...register("passportSeries", { required: true })}
            />
          </div>
          <div>
            <p>Your passport number</p>
            <input
              type="number"
              min="000000"
              max="999999"
              placeholder="000000"
              // minLength={6}
              // maxLength={6}
              {...register("passportNumber", { required: true })}
            />
          </div>
        </div>
        <div className="prescoring__information-btn">
          <button className="defaultButton" type="submit">
            Contiue
          </button>
        </div>
      </form>
    </section>
  );
}

export default Prescoring;
