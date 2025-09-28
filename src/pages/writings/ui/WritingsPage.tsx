import { WritingCard } from './WritingCard';
import { FilterBar } from './FilterBar';
// import { Pagination } from './Pagination';

const dummyWritings = [
  {
    title: '첫눈 오는 날',
    preview: '첫눈이 내리던 날, 나는 길 위에서...',
    author: '김작가',
    date: '2025-09-20',
    views: 123,
    thumbnail: '/sample.jpg',
  },
  {
    title: '책을 읽는다는 것',
    preview: '책 속에서 길을 찾기도 하고...',
    author: '이에세이',
    date: '2025-09-19',
    views: 98,
  },
];

export default function WritingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">모임 글 모음</h1>
          <p>모임원들의 시, 에세이, 소설이 모여 있는 공간입니다.</p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md">
          글쓰기
        </button>
      </header>

      <FilterBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {dummyWritings.map((w, idx) => (
          <WritingCard key={idx} {...w} />
        ))}
      </div>

      {/* <Pagination /> */}
    </div>
  );
}
