import { Card } from '@/src/shared/ui';

type WritingCardProps = {
  title: string;
  preview: string;
  author: string;
  date: string;
  views: number;
  thumbnail?: string;
};

export function WritingCard({
  title,
  preview,
  author,
  date,
  views,
  thumbnail,
}: WritingCardProps) {
  return (
    <Card className="p-4 flex flex-col gap-2">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{preview}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <span className="text-xs text-gray-400">조회수 {views}</span>
    </Card>
  );
}
