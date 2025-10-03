'use client';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/src/shared/api/supabase/client';

const Header = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  return (
    <div className="max-w-[1000px] m-auto">
      <header className="text-xl pt-15 pb-10 flex justify-between">
        <h1 className="text-2xl ">
          <Link href="/">문학의 정원</Link>
        </h1>
        <nav>
          <ul className="flex gap-10  text-base dark:text-gray-500">
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
        {user ? (
          <div className="flex gap-2 justify-center align-bottom">
            <p>{user.user_metadata?.name || user.email}님 </p>
            {user.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt="avatar"
                width={30}
                style={{ borderRadius: '50%' }}
              />
            )}
            <br />
            <Button onClick={handleLogout} variant="default">
              로그아웃
            </Button>
          </div>
        ) : (
          <Button variant="default">
            <Link href="/login">로그인</Link>
          </Button>
        )}
      </header>
    </div>
  );
};

export default Header;
