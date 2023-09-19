import { useForm, SubmitHandler } from "react-hook-form";
import "./Prescoring.scss";
import React, { useState } from "react";
import { contactInformation } from "./Prescoring.constant";
import { api_loan } from "../../../api/loan";
import { Tinputs } from "./Prescoring.type";
import { Input, Select } from "../../UI";
import { TState } from "../../../pages/Loan/Loan";
import { Action, Store } from "redux";

export type TResponceOffers = {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
};

type TPrescoring = {
  store: Store<TState, Action>;
  setOffers: React.Dispatch<React.SetStateAction<TResponceOffers[]>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

function Prescoring({
  store,
  setOffers,
  amount,
  setAmount,
}: TPrescoring) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data: Tinputs) => {
    setisSubmited(true);
    const responce = (await api_loan.sendPrescoring(data)).json();
    const status = (await api_loan.sendPrescoring(data)).ok;
    status && store.dispatch({ type: "PRESCORING" });
    console.log(status);
    responce.then((res: TResponceOffers[]) => {
      setOffers(res);
      console.log(res);
      localStorage.setItem("offers", JSON.stringify(res));
    });
  };

  const onError: SubmitHandler<any> = (data: Tinputs, event) => {
    event?.preventDefault();
    setisSubmited(true);
  };

  let step = 1;
  const minAmoint = 15000;
  const maxAmoint = 600000;
  let [isSubmited, setisSubmited] = useState(false);

  return (
    <section className="prescoring">
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
          <h4>Contact Information</h4>
          <div className="prescoring__information">
            {contactInformation.map((item) =>
              item.select === false ? (
                <div key={item.id}>
                  <Input
                    item={item}
                    errors={errors}
                    isSubmited={isSubmited}
                    register={register}
                  />
                </div>
              ) : (
                <div key={item.id}>
                  <Select
                    item={item}
                    errors={errors}
                    isSubmited={isSubmited}
                    register={register}
                  />
                </div>
              )
            )}
          </div>
          <div className="prescoring__information-btn">
            <button className="defaultButton" type="submit">
              Continue
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export { Prescoring };
