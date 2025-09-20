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
    <Carousel className={`border-2 col-span-2 rounded-lg overflow-hidden `}>
      <CarouselContent className="">
        {[1, 2, 3, 4, 5].map((img) => (
          <CarouselItem
            key={`슬라이드${img + 3}`}
            className="relative w-full aspect-video sm:aspect-[4/3]"
          >
            <Image
              src={`/slide/${img}.jpeg`}
              alt="정원 사진"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
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
