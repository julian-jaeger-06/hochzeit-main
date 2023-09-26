import './footer.css';
import PhoneIcon from './PhoneIcon';

export default function Footer() {
    return(
        <section className='FooterSection'>
                <h2 className='Beige'>
                    Trauzeugen
                </h2>
                <div>
                    <div>
                        <h3 className='Beige'>
                            Tim Schäfer
                        </h3>
                        <div>
                            <a href="tel:+4915772770460">+4915772770460</a>
                            <PhoneIcon/>
                        </div>
                    </div>
                    <div>
                        <h3 className='Beige'>
                            Vivi Engel
                        </h3>
                        <div>
                            <a href="tel:+49 177 3916170">+49 177 3916170</a>
                            <PhoneIcon/>
                        </div>
                    </div>
                </div>
        </section>
    );
}