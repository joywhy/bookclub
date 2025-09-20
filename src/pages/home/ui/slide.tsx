import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const Slide = () => {
  return (
    <Carousel className="border-2">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((img) => (
          <CarouselItem key={`슬라이드${img + 3}`}>
            <Image
              src={`/slide/${img}.jpeg`}
              alt="정원 사진"
              width={500}
              height={100}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default Slide;
