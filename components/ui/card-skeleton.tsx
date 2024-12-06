export function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-4 animate-pulse">
      <div className="h-48 bg-gray-200 rounded" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
    </div>
  )
}
