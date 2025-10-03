'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/shared/ui';
const categories = ['전체', '시', '에세이', '소설', '기타'];
const sorts = ['최신순', '조회순', '추천순'];

export function FilterBar() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('최신순');

  return (
    <div className="sticky top-0  z-10 border-b px-4 py-2 flex gap-4 items-center">
      <div className="flex gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-3 py-1 rounded-md text-sm hover:bg-gray-400 hover:text-white ${
              selectedCategory === c ? 'bg-gray-900 text-white' : 'bg-gray-500'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="ml-auto flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="최신순" />
          </SelectTrigger>
          <SelectContent>
            {sorts.map((s) => (
              <SelectItem key={s} onClick={() => setSelectedSort(s)} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
