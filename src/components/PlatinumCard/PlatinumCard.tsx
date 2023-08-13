import imgCard from '../../assets/svg/PlatinumCard.svg';
import './PlatinumCard.scss';

export default function PlatinumCard() {
    return (
          <section className='platinumCard'>
            <div className='platinumCard__description'>
                <h1>Platinum digital credit card</h1>
                <p>Our best credit card. Suitable for everyday spending and shopping.
                    Cash withdrawals and transfers without commission and interest.</p>
                <div className='platinumCard__columns'>
                    <ul className='tooltip'>
                        <li>Up to 160 days</li>
                        <li>No percent</li>
                        <span className="tooltiptext">When repaying the full debt up to 160 days.</span>
                    </ul>
                    <ul className='tooltip'>
                        <li> Up to 600 000 &#8381;</li>
                        <li>Credit limit</li>
                        <span className="tooltiptext">Over the limit willaccrue percent</span>
                    </ul>
                    <ul className='tooltip'>
                        <li>0 &#8381;</li>
                        <li>Card service is free</li>
                        <span className="tooltiptext">Promotion valid until December 31, 2022.</span>
                    </ul>
                </div>
                <button className="defaultButton">Apply for card</button>
            </div>
            <div className='platinumCard__img'>
                <img src={imgCard} alt='Platinum Card'></img>
            </div>
          </section>
    );
}