import './location.css';
import Bild from './Bild';
import HotelChetzeronOutside from '@/assets/hotel-chetzeron-outside.jpeg'
import HotelChetzeronTerrace from '@/assets/hotel-chetzeron-terrace.jpeg'
import HotelChetzeronRestaurant from '@/assets/hotel-chetzeron-restaurant.jpeg'


export default function Location() {
    return(
        <section className='DieLocation'>
            <h2>
                Die Location
            </h2>
            <h3 className='subline'> 
                Auf 2112 Metern geht stehts ein kleines Lüftchen, also bring etwas zum überziehen mit.
            </h3>
            <Bild image={HotelChetzeronOutside}/>
            <div className='LocationInfoGrid'>
                <div>
                    <h4>Gäste, die in der Location übernachten:
                    </h4>
                    <p>
                        Ihr bekommt Anreise Optionen per Mail vom Hotel gesendet, da dieses nicht mit dem eigenen Auto erreichbar ist.
                    </p>
                    <h4>
                        Auto Parkmöglichkeit
                    </h4>
                    <a href='https://www.google.com/maps/place/Rte+des+T%C3%A9l%C3%A9ph%C3%A9riques+32/@46.3086403,7.4671481,20.25z/data=!4m7!3m6!1s0x478ee0337f683885:0xa2d4bc046344bed6!4b1!8m2!3d46.3087565!4d7.4669288!16s%2Fg%2F11c5np9g08?entry=ttu'
                        rel="noopener noreferrer" target="_blank">
                    <span>
                        Route des Téléphériques 32 3963 Crans-Montana
                    </span>
                    </a>
                    <h4>
                        Abreise
                    </h4> 
                    <p>
                    Am 07.07.2024 bis ca. 12 Uhr
                    </p>
                </div>
                <Bild image={HotelChetzeronRestaurant}/>
                <Bild image={HotelChetzeronTerrace}/>
                <div>
                    <h4>
                        Für alle Gäste, die aus dem Tal kommen:
                    </h4>
                    <p>
                        Fahrt bitte spätestens um 15:00 mit der Gondel hoch zum Hotel.
                    </p>
                    <h4>
                        Adresse Gondel:
                    </h4>
                    <a href='https://www.google.com/maps/place/Rte+des+T%C3%A9l%C3%A9ph%C3%A9riques+32/@46.3086403,7.4671481,20.25z/data=!4m7!3m6!1s0x478ee0337f683885:0xa2d4bc046344bed6!4b1!8m2!3d46.3087565!4d7.4669288!16s%2Fg%2F11c5np9g08?entry=ttu'
                        rel="noopener noreferrer" target="_blank">
                    <span>
                        Route des Téléphériques 32 3963 Crans-Montana
                    </span>
                    </a>
                    <h4>
                        Rücktransfer:
                    </h4>
                    <p>
                       Der Rücktransfer erfolgt mit dem Auto direkt in eure Unterkunft (sollte diese in Crans Montana sein)
                    </p>
                </div>
            </div>
        </section>
    )
};