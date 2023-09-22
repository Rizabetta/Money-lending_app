import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  additionalInformation,
  employmentInformation,
} from "./Scoring.constant";
import { Input, Select, StepTitle } from "../../UI";
import "./Scoring.scss";
import { api_loan } from "../../../api/loan";

export type TScoring = {
  gender: string;
  maritalStatus: string;
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: {
    employmentStatus: string;
    employerINN: string;
    salary: number;
    position: string;
    workExperienceTotal: number;
    workExperienceCurrent: number;
  };
  account: string;
};

function Scoring({ setStatusScoring }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setisSubmited(true);
    const responce = api_loan.sendScoring(data);
    responce.then((e) => console.log(e));
    setStatusScoring((await responce).status);
  };

  const onError: SubmitHandler<any> = (data: any, event) => {
    event?.preventDefault();
    setisSubmited(true);
  };

  let [isSubmited, setisSubmited] = useState(false);
  const titleProps = {
    title: "Continuation of the application",
    currentStep: 2,
    totalSteps: 5,
  };

  const returnInputFunc = (item: any): JSX.Element => {
    return (
      <div key={item.id}>
        <Input
          item={item}
          errors={errors}
          isSubmited={isSubmited}
          register={register}
        />
      </div>
    );
  };

  const returnSelectFunc = (item: any): JSX.Element => {
    return (
      <div key={item.id}>
        <Select
          item={item}
          errors={errors}
          isSubmited={isSubmited}
          register={register}
        />
      </div>
    );
  };

  return (
    <section className="scoring">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <StepTitle titleProps={titleProps} />
        <div className="scoring__container">
          {additionalInformation.map((item) =>
            item.select === false
              ? returnInputFunc(item)
              : returnSelectFunc(item)
          )}
        </div>
        <h4>Employment</h4>
        <div className="scoring__container">
          {employmentInformation.map((item) =>
            item.select === false
              ? returnInputFunc(item)
              : returnSelectFunc(item)
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
