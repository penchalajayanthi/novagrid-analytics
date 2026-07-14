interface LoadingSkeletonProps {
  rows?: number;
}

const LoadingSkeleton = ({
  rows = 5,
}: LoadingSkeletonProps) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="h-12 animate-pulse rounded-lg bg-gray-200"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;