'use client';

import React, { useState } from 'react';
import { Calendar } from '@/src/shared/ui/calendar';
import { Button } from '@/src/shared/ui/button';
import './Calender03.css';
import { ScrollArea, ScrollBar } from '@/src/shared/ui/scroll-area';

export function Calendar03() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const schedules = [
    {
      date: new Date('2025/09/21/17:22:10'),
      work: '호암 미술관 투어(루이스 부르주아)',
      memo: '구성역에서 함께 택시로 이동',
      members: [
        {
          id: 1,
          name: '권준호',
          img: '',
        },
        {
          id: 2,
          name: '이기욱',
          img: '',
        },
        {
          id: 3,
          name: '김호준',
          img: '',
        },
      ],
    },
    {
      date: new Date('2025/09/19/17:22:10'),
      work: '자유 작문 + 자유 독서',
      memo: '장안문 옆 카페 오늘 별실',
      members: [
        {
          id: 1,
          name: '권준호',
          img: '',
        },
        {
          id: 2,
          name: '이기욱',
          img: '',
        },
      ],
    },
    {
      date: new Date('2025/09/19/17:22:10'),
      work: '자유 작문 + 자유 독서',
      memo: '장안문 옆 카페 오늘 별실',
      members: [
        {
          id: 1,
          name: '권준호',
          img: '',
        },
        {
          id: 2,
          name: '이기욱',
          img: '',
        },
      ],
    },
  ];
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const formattedDate = date?.toLocaleDateString('ko-KR', options);

  const CustomFooter = () => {
    if (!date) return <div>Please pick a date.</div>;

    return (
      <ScrollArea className="mt-2 p-2 flex-1 rounded-md border whitespace-nowrap">
        <div className="font-anchangho text-sm overflow-x-hidden max-h-[600px] ">
          <h3 className="whitespace-pre-line  text-gray-800">
            {`${formattedDate} 일정 `}
          </h3>
          <br />
          <div className="schedule flex justify-between items-end">
            <div>
              <h4 className="whitespace-pre-line font-bold text-gray-800">
                {`|호암 미술관 투어(루이스 부르주아)\n`}
              </h4>
              <div className="text-sm text-gray-600">오후 12:30</div>
            </div>
            {/* <Button variant="destructive">신청</Button> */}
            <Button variant="secondary">신청</Button>
          </div>

          <div className="schedule flex justify-between items-end">
            <div>
              <h4 className="whitespace-pre-line font-bold text-gray-800 pt-3">
                {`|자유 작문 + 자유 독서\n`}
              </h4>
              <div className="text-sm text-gray-600">
                오후 7:50 ~ 오후 10:45 카페 오늘
              </div>
            </div>
            <Button variant="secondary">신청</Button>
          </div>
          <div className="schedule flex justify-between items-end">
            <div>
              <h4 className="whitespace-pre-line font-bold text-gray-800 pt-3">
                {`|자유 작문 + 자유 독서\n`}
              </h4>
              <div className="text-sm text-gray-600">
                오후 7:50 ~ 오후 10:45 카페 오늘
              </div>
            </div>
            <Button variant="secondary">신청</Button>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        classNames={{
          root: `rdp border-2 border-gray-500 border-none p-5`,
          today: `bg-green-100 rounded-lg`,
          selected: `bg-green-500 text-white rounded-lg`,
        }}
        footer={<CustomFooter />}
      />
    </>
  );
}
