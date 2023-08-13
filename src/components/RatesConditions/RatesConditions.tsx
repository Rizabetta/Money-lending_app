import './RatesConditions.scss';

export default function RatesConditions() {    
    const ratesList = [
        {title: 'Card currency', description: 'Rubles, dollars, euro'},
        {title: 'Interest free period', description: '0% up to 160 days'},
        {title: 'Payment system', description: 'Mastercard, Visa'},
        {title: 'Maximum credit limit on the card', description: '600 000 ₽'},
        {title: 'Replenishment and withdrawal', description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards'},
        {title: 'Max cashback per month', description: '15 000 ₽'},
        {title: 'Transaction Alert', description: `60 ₽ — SMS or push notifications \n 0 ₽ — card statement, information about transactions in the online bank`},
    ];

    return (
        <section className='RatesConditions'>
            <table>
                <tbody>
                {ratesList.map((item, key) => <tr key={key}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                </tr>)}
                </tbody>
                
            </table>
        </section>
    );
}
