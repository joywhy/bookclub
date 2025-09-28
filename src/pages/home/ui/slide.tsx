import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/shared/ui/carousel';
import Image from 'next/image';
import React from 'react';

const Slide = () => {
  return (
    <Carousel className={`col-span-2 rounded-lg overflow-hidden  w-full `}>
      <CarouselContent className="-ml-3">
        {[5, 2, 6, 'bg', 'bg2'].map((img) => (
          <CarouselItem
            key={`슬라이드${img + '3'}`}
            className="relative w-full aspect-video sm:aspect-[4/3] pl-3 "
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
