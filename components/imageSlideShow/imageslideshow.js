'use client'
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';
import Image from 'next/image';
import { useEffect ,useState} from 'react';

const Images=[
    {image:burgerImg,alt:'A delicious,juicy burger'},
    { image: curryImg, alt: 'A delicious, spicy curry' },
   { image: dumplingsImg, alt: 'Steamed dumplings' },
   { image: macncheeseImg, alt: 'Mac and cheese' },
   { image: pizzaImg, alt: 'A delicious pizza' },
   { image: schnitzelImg, alt: 'A delicious schnitzel' },
   { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideShow(){
    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    useEffect(()=>{ 
        const interval=setInterval(()=>{
        setCurrentImageIndex((prevIndex)=>
        prevIndex<Images.length-1?prevIndex+1:0);

    },5000);
    return ()=>clearInterval(interval);
},[]);
   

    return (
    <div className={classes.slideshow}>
  {Images.map((images,index)=><Image key={index} src={images.image} alt={images.alt}
  className={index===currentImageIndex?classes.active:''}/>)

  }
    </div>
    )
}