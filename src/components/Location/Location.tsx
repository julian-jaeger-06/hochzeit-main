import './location.css';
import Bild from './Bild';
import HotelChetzeronOutside from '@/assets/hotel-chetzeron-outside.jpeg'

export default function Ablauf() {
    return(
        <section className='DieLocation'>
            <h2>
                Die Location
            </h2>
            <p>
            Auf 2112 Metern geht stehts ein kleines Lüftchen, also bring etwas zum überziehen mit.
            </p>
         <Bild image={HotelChetzeronOutside}/>
        </section>
    )
}