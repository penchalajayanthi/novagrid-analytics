const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-xl border bg-white p-6 shadow-md">
      <div className="h-4 w-24 rounded bg-gray-200"></div>

      <div className="mt-4 h-8 w-32 rounded bg-gray-200"></div>

      <div className="mt-4 h-3 w-20 rounded bg-gray-200"></div>
    </div>
  );
};

export default SkeletonCard;