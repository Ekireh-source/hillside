import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Logo from "@/components/images/Logo1.png";
import slide1 from "@/components/images/slide1.jpeg"
import slide2 from "@/components/images/slide2.jpg"
import slide3 from "@/components/images/slide3.jpeg"

const CarouselSlide = () => {
  return (
    <Carousel className="relative w-full h-screen">
  
  <CarouselContent className="relative h-full z-10">
    <CarouselItem className="relative h-full w-full">
      <div className="relative h-full w-full">
        <Image src={slide2} alt="slide2" className="h-screen w-screen object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl">
          <span>HILLSIDE SPORTS ACADEMY</span>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem className="relative h-full w-full">
      <div className="relative h-full w-full">
        <Image src={slide3} alt="slide3" className="h-screen w-screen object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
          <span>Text Overlay 2</span>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem className="relative h-full w-full">
      <div className="relative h-full w-full">
        <Image src={slide2} alt="slide2" className="h-screen w-screen object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
          <span>Text Overlay 3</span>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full z-20">
    {/* Previous button content */}
  </CarouselPrevious>
  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full z-20">
    {/* Next button content */}
  </CarouselNext>
</Carousel>
  )
};



export default CarouselSlide;
