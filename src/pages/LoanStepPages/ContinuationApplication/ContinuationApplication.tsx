import { Scoring } from "../../../components/LoanStepPages";
import { FormWrapper, MessageWrapper } from "../../../components/UI";
import { useState } from "react";

function ContinuationApplication() {
  const [statusScoring, setStatusScoring] = useState(500);
  return (
    <main className="main">
      {statusScoring === 200 ? (
        <MessageWrapper>
          <h3>Wait for a decision on the application</h3>
          <p>The answer will come to your mail within 10 minutes</p>
        </MessageWrapper>
      ) : (
        <FormWrapper>
          <Scoring setStatusScoring={setStatusScoring} />
        </FormWrapper>
      )}
    </main>
  );
}

export { ContinuationApplication };
