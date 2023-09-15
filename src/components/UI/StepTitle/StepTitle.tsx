import "./StepTitle.scss";

type TitleProps = {
  titleProps: {
    title: string;
    currentStep: number;
    totalSteps: number;
  };
};

function StepTitle({ titleProps }: TitleProps) {
  return (
    <div className="stepTitle">
      <h3>{titleProps.title}</h3>
      <p>
        Step {titleProps.currentStep} of {titleProps.totalSteps}
      </p>
    </ div>
  );
}

export { StepTitle };
