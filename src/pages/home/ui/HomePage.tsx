import React, { useState } from 'react';
import { Calendar03 as Calendar } from './calendar';
import Slide from './slide';
import PreviewFeed from './PreviewFeed';

const homePage = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-2   gap-4">
      <Slide />
      <Calendar />
      <PreviewFeed />
    </div>
  );
};

export default homePage;
