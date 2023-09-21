import './ablauf.css';


export default function Ablauf() {

    return(
        <section>
            <h2>
                Ablauf des Wochenendes
            </h2>
            <div className="AblaufFakten">
                <div className="get-together">
                    <h3>Get together</h3>
                    <div>
                        <img className="kalender-icon" alt="Kalender icon" src="kalender-icon.svg" />
                        <span>Freitag 05.07.2024</span>
                    </div>
                    <div>
                        <img className="uhr-icon" alt="Uhr icon" src="uhr-icon.svg" />
                        <span>17 Uhr</span>
                    </div>
                    <div>
                        <img className="pin-icon" alt="Pin icon" src="pin-icon.svg" />
                        <a href="https://www.google.com/maps/place/Restaurant+de+la+Plage/@46.3036257,7.4772441,17z/data=!4m14!1m7!3m6!1s0x478ee029bd349c6f:0x7d0e406e48d0812!2sRestaurant+de+la+Plage!8m2!3d46.303622!4d7.479819!16s%2Fg%2F1wbfz9km!3m5!1s0x478ee029bd349c6f:0x7d0e406e48d0812!8m2!3d46.303622!4d7.479819!16s%2Fg%2F1wbfz9km?entry=ttu"
                            rel="noopener noreferrer" target="_blank">
                            <p className="p">Restaurant de la Plage, Imp. de la Plage, 3963 Crans-Montana, Schweiz</p>
                        </a>
                    </div>
                </div> 
                <div className="HochzeitTrauung">
                    <h3>Hochzeit/ Trauung</h3>
                    <div>
                        <img className="kalender-icon" alt="Kalender icon" src="kalender-icon.svg" />
                        <span>Samstag 06.07.2024</span>
                    </div>
                    <div>
                        <img className="uhr-icon" alt="Uhr icon" src="uhr-icon.svg" />
                        <span>16 Uhr</span>
                    </div>
                    <div>
                        <img className="pin-icon" alt="Pin icon" src="pin-icon.svg" />
                        <a href="https://www.google.com/maps/place/Chetzeron/@46.3240536,7.4690021,16.57z/data=!4m22!1m12!4m11!1m3!2m2!1d7.4670658!2d46.3269429!1m6!1m2!1s0x478ee1c094b8b373:0xce99e964b3e38612!2sChetzeron,+3963+Crans-Montana,+Schweiz!2m2!1d7.4669139!2d46.3265611!3m8!1s0x478ee1c094b8b373:0xce99e964b3e38612!5m2!4m1!1i2!8m2!3d46.3265611!4d7.4669139!16s%2Fg%2F11byflj49h?entry=ttu"
                            rel="noopener noreferrer" target="_blank">
                            <p className="p">Hotel Chetzeron, 3963 Crans-Montana, Schweiz</p>
                        </a>
                    </div>
                </div> 
            </div>
           
        </section>
    );
}
