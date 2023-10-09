import { FormWrapper, Message } from "../../../components/UI";
import { useState } from "react";
import { Scoring } from "./Scoring";

function ContinuationApplication() {
  const [statusScoring, setStatusScoring] = useState(500);
  const data = {
    title: "Wait for a decision on the application",
    subtitle: "The answer will come to your mail within 10 minutes",
  };
  return (
    <main className="main">
      {statusScoring === 200 ? (
        <Message {...data} />
      ) : (
        <FormWrapper>
          <Scoring setStatusScoring={setStatusScoring} />
        </FormWrapper>
      )}
    </main>
  );
}

export { ContinuationApplication };
