export default function Skeleton({ className }: props) {
  return <div className={`skeleton leading-none overflow-hidden relative bg-gray-200 ${className}`} />;
}

type props = { className: string };
