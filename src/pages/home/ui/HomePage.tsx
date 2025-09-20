import React, { useState } from 'react';
import { Calendar03 as Calendar } from './calendar';
import Slide from './slide';

const homePage = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-2   border-2 gap-4">
      <Slide />
      <Calendar />
    </div>
  );
};

export default homePage;
