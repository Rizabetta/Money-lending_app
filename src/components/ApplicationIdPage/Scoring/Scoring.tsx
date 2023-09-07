import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  additionalInformation,
  employmentInformation,
} from "./Scoring.constant";
import { Input, Select } from "../../UI";
import "./Scoring.scss";

function Scoring() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setisSubmited(true);
    console.log(data);
  };

  const onError: SubmitHandler<any> = (data: any, event) => {
    event?.preventDefault();
    setisSubmited(true);
  };

  let step = 2;
  let [isSubmited, setisSubmited] = useState(false);

  return (
    <section className="scoring">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="scoring__topcontainer">
          <h3>Continuation of the application</h3>
          <p>Step {step} of 5</p>
        </div>
        <div className="scoring__container">
          {additionalInformation.map((item) =>
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
        <h4>Employment</h4>
        <div className="scoring__container">
          {employmentInformation.map((item) =>
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
        <div className="scoring__submit">
          <button className="defaultButton" type="submit">
            Contiue
          </button>
        </div>
      </form>
    </section>
  );
}

export { Scoring };
