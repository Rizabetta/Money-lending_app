import './Support.scss';
import email from '../../assets/svg/Email.svg';
import subscribe from '../../assets/svg/Subscribe.svg';

export default function Support() {
    return (
        <section className="support">
            <p className="support__appeal-1">Support</p>
            <a href="# " className="support__appeal-2">Subscribe Newsletter & get</a>
            <a href="# " className="support__appeal-3">Bank News</a>
            <form className="support__search-form">
                <div className="support__email">
                    <label>
                        <img src={email} alt="Email" />
                        <input placeholder="Your email" className="support__search-form__input"/>
                    </label>
                </div>
                <button className="support__search-form__button"><img src={subscribe} alt="Subscribe" />
                    Subscribe</button>
            </form>
        </section>
    );
  }
  