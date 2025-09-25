import React from 'react';
import { Calendar03 as Calendar } from './calendar';
import Slide from './slide';
import PreviewFeed from './PreviewFeed';

const homePage = () => {
  return (
    <div className=" grid grid-cols-2 grid-rows-2  lg:grid-cols-3  gap-4">
      <Slide />
      <Calendar />
      <PreviewFeed />
    </div>
  );
};

export default homePage;
