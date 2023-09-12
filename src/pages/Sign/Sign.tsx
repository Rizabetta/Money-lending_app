import { MessageWrapper } from "../../components/UI";

function Sign() {
  return (
    <main className="main">
      <MessageWrapper>
        <h3>Documents have been successfully signed and sent for approval</h3>
        <p>
          Within 10 minutes you will be sent a PIN code to your email for
          confirmation
        </p>
      </MessageWrapper>
    </main>
  );
}

export { Sign };
