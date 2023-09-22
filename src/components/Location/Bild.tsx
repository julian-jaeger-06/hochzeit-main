import Image, { StaticImageData } from "next/image";
import './bild.css'


export default function Ablauf({image}:Props) {
    return (
        <div className="TaperBild">
            <div className='TapeLeft'>
            </div>
            <Image src={image} alt={"Hotel Chetzeron"} />
            <div className='TapeRight'>
            </div>    
        </div>
    )
}

type Props = {
    image: StaticImageData;
  };