import { useForm, SubmitHandler } from "react-hook-form";
import "./Prescoring.scss";
import { useState } from "react";
import required from "../../assets/svg/Required.svg";
import { contactInformation } from "./Prescoring.constant";
import invalid from "../../assets/svg/Invalid.svg";
import valid from "../../assets/svg/Valid.svg";
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

function Prescoring({ buttonRef }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    
    // setisSubmited(true);
    console.log(data);
    console.log("sub ",isSubmited);
  };

  const submitHandler : SubmitHandler<any>  = (data: SubmitHandler<any>, event) => {
    event?.preventDefault();
    setisSubmited(true);
    onSubmit(data);
  }

  let step = 1;
  let [amount, setAmount] = useState(15000);
  const minAmoint = 15000;
  const maxAmoint = 600000;

  let [isSubmited, setisSubmited] = useState(false);
  console.log("no  ",isSubmited);
  return (
    <section className="prescoring" ref={buttonRef}>
      <form onSubmit={submitHandler}>
        <div className="prescoring__topcontainer">
          <div className="prescoring__leftsection">
            <div className="prescoring__step">
              <h3>Customize your card</h3>
              <p>Step {step} of 5</p>
            </div>
            <div className="prescoring__selectamount">
              <p>Select amount</p>
              <input
                type="number"
                max={maxAmoint}
                min={minAmoint}
                placeholder="enter amount"
                {...register("amount", { required: true })}
                step={1000}
                value={amount}
                onChange={(i) => {
                  setAmount(Number(i.target.value));
                  if (Number(i.target.value) < minAmoint) setAmount(minAmoint);
                  if (Number(i.target.value) > maxAmoint) setAmount(maxAmoint);
                }}
              />
              <input
                type="range"
                min={minAmoint}
                max={maxAmoint}
                value={amount}
                step="1000"
                data-orientation="vertical"
                onChange={(i) => setAmount(Number(i.target.value))}
              ></input>
              <div className="prescoring__selectamount__maxmin">
                <p>{minAmoint.toLocaleString("ru-RU")}</p>
                <p>{maxAmoint.toLocaleString("ru-RU")}</p>
              </div>
            </div>
          </div>
          <div className="prescoring__rightsection">
            <h4>You have chosen the amount</h4>
            <p className="prescoring__selectamount-p">
              {amount.toLocaleString("ru-RU")} <b>&#8381;</b>
            </p>
            <hr></hr>
          </div>
        </div>
        <div className="prescoring__bottomcontainer">
          <h3>Contact Information</h3>
          <div className="prescoring__information">
            {contactInformation.map((item) =>
              item.select === false ? (
                <div key={item.id}>
                  <div className="prescoring__information-title">
                    <p>{item.title}</p>
                    {item.required && <img src={required} alt="required"></img>}
                  </div>
                  <div className="prescoring__information-input">
                    <label>
                      <input
                        type={item.type}
                        id={item.register}
                        placeholder={item.placeholder}
                        {...register(`${item.register}`, {
                          required: item.required,
                          max: item.max,
                          min: item.min,
                          maxLength: item.maxLength,
                          minLength: item.minLength,
                          pattern: item.pattern,
                        })}
                      />
                      { errors?.[item.register] ? (
                        <img src={invalid} alt="invalid"></img>
                      ) : (
                        isSubmited && <img src={valid} alt="valid"></img>
                      )}
                    </label>
                    {errors?.[item.register] && (
                      <span role="alert">{item.invalid}</span>
                    )}
                  </div>
                </div>
              ) : (
                <div key={item.id}>
                  <div className="prescoring__information-title">
                    <p>{item.title}</p>
                    {item.required && <img src={required} alt="required"></img>}
                  </div>
                  <select
                    {...register(`${item.register}`, {
                      required: item.required,
                    })}
                  >
                    {item.maplist?.map((element, key) => (
                      <option key={key} value={element.value}>
                        {element.titel}
                      </option>
                    ))}
                  </select>
                </div>
              )
            )}
          </div>
          <div className="prescoring__information-btn">
            <button className="defaultButton" type="submit">
              Contiue
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Prescoring;
