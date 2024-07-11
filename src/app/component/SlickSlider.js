'use client'
import React,{useState, useRef} from "react";
import { Avatar, Card, ListItem, Stack , Box, Button, Typography } from "@mui/material";
import { MenuList } from "../data/Item";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import style from '../style.css'
import Nab from './Nab'
export default function SlickSlider() {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [autoplay, setAutoplay] = useState(true);

   const settings = {
   //   dots: true,
     infinite: false,
   //   speed: 500,
     slidesToShow: 5.5,
     slidesToScroll: 3.5,
     swipe: true,
     touchMove: true,
     arrows: false,
     swipe: true, // Enable swipe to scroll
     touchMove: true, 
     autoplaySpeed: autoplay,
     afterChange: (current) => {
      setCurrentSlide(current);
     if (current === 3) { // Adjust this if you have more or fewer slides
      setAutoplay(false);
    }}
   };
 
   const next = () => {
     sliderRef.current.slickNext();
   };
 
   const previous = () => {
     sliderRef.current.slickPrev();
   };
 
    return (
     <>
     <Nab/>
     <Box className=' relative   w-[70vw] mx-auto  mt-32 gap-4 '> 
     <Typography  variant="h5" className='font-bold py-5'>Whats  on your mind?</Typography>
     <Slider ref={sliderRef} {...settings}>
    {
     MenuList.map((text,index)=>(

      <Stack key={index} className='' >
         <Avatar  variant="square" src={text.image} className=" w-[150px] h-[150px] cursor-pointer  " />
      </Stack>
     ))
}
</Slider>
<Box className=' absolute top-0 right-0 py-4'>
<ArrowCircleLeftIcon onClick={previous} className='cursor-pointer text-zinc-200 w-[40px] h-[40px]'/>
<ArrowCircleRightIcon onClick={next} className='cursor-pointer text-zinc-200  w-[40px] h-[40px]' />
</Box>
<Box className='border border-b-zinc-200 mt-14' ></Box>
</Box>

     </>
    );
  }