import Image, { StaticImageData } from "next/image";
import './bild.css'


export default function Bild({image}:Props) {
    return (
        <div className="TaperBild">
            <div className='TapeLeft'>
            </div>
            <Image className="HotelChetzeron" src={image} alt={"Hotel Chetzeron"}  />
            <div className='TapeRight'>
            </div>    
        </div>
    )
}

type Props = {
    image: StaticImageData;
  };