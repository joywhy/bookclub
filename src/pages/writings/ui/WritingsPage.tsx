import { WritingCard } from './WritingCard';
import { FilterBar } from './FilterBar';
import { Pagination } from '@/src/shared/ui';
import { dummyWritings } from '../model/mocks';
import { getWritings } from '../api/getWritings';

export default async function WritingsPage() {
  const writings = await getWritings();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-gray-500">
            모임 글 모음
          </h1>
          <p className="dark:text-gray-500">
            모임원들의 시, 에세이, 소설이 모여 있는 공간입니다.
          </p>
        </div>

        {/* <button className="bg-black text-white px-4 py-2 rounded-md">
          글쓰기
        </button> */}
      </header>

      <FilterBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {dummyWritings.map((w, idx) => (
          <WritingCard key={idx} {...w} />
        ))}
      </div>
    </div>
  );
}
