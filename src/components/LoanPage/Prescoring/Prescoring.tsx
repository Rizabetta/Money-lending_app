import { useForm, SubmitHandler } from "react-hook-form";
import "./Prescoring.scss";
import { useState } from "react";
import required from "../../../assets/svg/Required.svg";
import { contactInformation } from "./Prescoring.constant";
import invalid from "../../../assets/svg/Invalid.svg";
import valid from "../../../assets/svg/Valid.svg";
import { api_loan } from "../../../api/loan";
import { Tinputs } from "./Prescoring.type";

function Prescoring({ buttonRef }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data: Tinputs) => {
    setisSubmited(true);
    api_loan.postPrescoring(data);
  };

  const onError: SubmitHandler<any> = (data: Tinputs, event) => {
    event?.preventDefault();
    setisSubmited(true);
  };

  let step = 1;
  let [amount, setAmount] = useState(15000);
  const minAmoint = 15000;
  const maxAmoint = 600000;
  let [isSubmited, setisSubmited] = useState(false);

  return (
    <section className="prescoring" ref={buttonRef}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                        className={errors?.[item.register] && "invalidinput"}
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
                      {isSubmited &&
                        (errors?.[item.register] ? (
                          <img src={invalid} alt="invalid"></img>
                        ) : (
                          <img src={valid} alt="valid"></img>
                        ))}
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

export { Prescoring };
