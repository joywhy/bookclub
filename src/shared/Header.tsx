import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="max-w-[1000px] m-auto">
      <header className="text-xl pt-15 pb-10 flex justify-between">
        <h1 className="text-2xl ">
          <Link href="/">문학의 정원</Link>
        </h1>
        <nav>
          <ul className="flex gap-10  text-base dark:text-[#979797]">
            <li>
              <Link href="/about">모임소개</Link>
            </li>
            <li>
              <Link href="/writings">작문 마당</Link>
            </li>
            <li>
              <Link href="/bookclub">독서 모임</Link>
            </li>
            <li>
              <Link href="/gallery">갤러리</Link>
            </li>
            <li>
              <Link href="/notice">공지사항</Link>
            </li>
          </ul>
        </nav>
        <Button variant="default">
          <Link href="/login">로그인</Link>
        </Button>
      </header>
    </div>
  );
};

export default Header;
