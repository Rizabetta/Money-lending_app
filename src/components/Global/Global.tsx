import hugeGlobal from '../../assets/svg/Huge_Global.svg'

export default function Global() {
    return (
        <section className="global">
            <h3 className="heading">You can use our services anywhere in the world</h3>
            <p className="paragraph">Withdraw and transfer money online through our application</p>
            <figure>
                <img src={hugeGlobal} alt="Huge Global" />
            </figure>
        </section>
    );
}
  