import "./Support.scss";
import emailimg from "../../../assets/svg/Email.svg";
import subscribe from "../../../assets/svg/Subscribe.svg";
import { useState } from "react";
import { api_home } from "../../../API/home";

function Support() {
  let [email, setEmail] = useState("");

  function handleSubmit() {
    api_home.postEmail(email);
  }

  return (
    <section className="support">
      <p className="support__appeal-1">Support</p>
      <a href="# " className="support__appeal-2">
        Subscribe Newsletter & get
      </a>
      <a href="# " className="support__appeal-3">
        Bank News
      </a>
      <form className="support__search-form" onSubmit={handleSubmit}>
        <div className="support__email">
          <label>
            <img src={emailimg} alt="Email" />
            {sessionStorage.getItem("status") === "200" ? (
              <p>You are already subscribed to the bank's newsletter</p>
            ) : (
              <input
                type="email"
                value={email}
                onChange={(i) => {
                  setEmail(i.target.value);
                }}
                placeholder="Your email"
                className="support__search-form__input"
              />
            )}
          </label>
        </div>
        {sessionStorage.getItem("status") !== "200" && (
          <button type="submit" className="support__search-form__button">
            <img src={subscribe} alt="Subscribe" />
            Subscribe
          </button>
        )}
      </form>
    </section>
  );
}

export { Support };
