import React from 'react'

export const SkeletonLoader = ({ className }: { className?: string }) => {
   return (
      <div
         className={`animate-pulse bg-gray-200 rounded-md ${className}`}
      ></div>
   )
}
