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
                    <ul>
                        <li>Up to 160 days</li>
                        <li>No percent</li>
                    </ul>
                    <ul>
                        <li> Up to 600 000 &#8381;</li>
                        <li>Credit limit</li>
                    </ul>
                    <ul>
                        <li>0 &#8381;</li>
                        <li>Card service is free</li>
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