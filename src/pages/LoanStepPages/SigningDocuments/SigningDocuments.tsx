import { useState } from "react";
import { Message, StepTitle } from "../../../components/UI";
import { Link } from "react-router-dom";
import { api_loan } from "../../../api/loan";
import pdf from "../../../assets/pdf/creditCardOffer.pdf";
import pdfImg from "../../../assets/svg/pdfImg.svg";
import "./SigningDocuments.scss";

const titleProps = {
  title: "Signing of documents",
  currentStep: 4,
  totalSteps: 5,
};

function SigningDocuments() {
  const [messageActive, setMessageActive] = useState(false);
  const data = {
    title: "Documents have been successfully signed and sent for approval",
    subtitle:
      "Within 10 minutes you will be sent a PIN code to your email for confirmation",
  };
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => setChecked(!isChecked);
  const handleSendClick = async () => {
    setMessageActive((await api_loan.signDocuments()).ok);
  };

  return (
    <main className="main">
      <section className="signingDocuments">
        {messageActive ? (
          <Message {...data} />
        ) : (
          <>
            <StepTitle titleProps={titleProps} />
            <p className="signingDocuments__Information-p">
              Information on interest rates under bank deposit agreements with
              individuals. Center for Corporate Information Disclosure.
              Information of a professional participant in the securities
              market. Information about persons under whose control or
              significant influence the Partner Banks are. By leaving an
              application, you agree to the processing of personal data,
              obtaining information, obtaining access to a credit history, using
              an analogue of a handwritten signature, an offer, a policy
              regarding the processing of personal data, a form of consent to
              the processing of personal data.
            </p>
            <Link to={pdf} target="blank">
              <img src={pdfImg} alt="Email" />
              <p>Information on your card</p>
            </Link>
            <div className="signingDocuments__checkbox">
              <input
                type="checkbox"
                onChange={handleClick}
                id="approval"
                name="approval"
                checked={isChecked}
              />
              <label htmlFor="approval">
                I agree with the payment schedule
              </label>
              <button
                disabled={!isChecked}
                className={isChecked ? "defaultButton" : "disabledButton"}
                onClick={handleSendClick}
              >
                Send
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export { SigningDocuments };
