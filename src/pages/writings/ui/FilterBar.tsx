'use client';

import { useState } from 'react';

const categories = ['전체', '시', '에세이', '소설'];
const sorts = ['최신순', '조회순', '추천순'];

export function FilterBar() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('최신순');

  return (
    <div className="sticky top-0 bg-white z-10 border-b px-4 py-2 flex gap-4 items-center">
      <div className="flex gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedCategory === c ? 'bg-gray-900 text-white' : 'bg-gray-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="ml-auto flex gap-2">
        {sorts.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedSort(s)}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedSort === s ? 'bg-gray-900 text-white' : 'bg-gray-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
