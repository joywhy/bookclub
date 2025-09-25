import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/shared/components/ui/table';
import { Card } from '@/src/shared/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/shared/components/ui/carousel';
const PreviewFeed = () => {
  return (
    <Carousel
      orientation="vertical"
      className="border-2 h-10"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className="pl-4">
          [새로운 글] 000님의 글이 올라왔어요 ~!{' '}
        </CarouselItem>
        <CarouselItem className="pl-4">...</CarouselItem>
        <CarouselItem className="pl-4">...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default PreviewFeed;
