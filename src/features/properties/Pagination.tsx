'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type PaginationProps = {
   total: number;
   page: number;
   limit: number;
};

export default function Pagination({ total, page, limit }: PaginationProps) {
   const totalPages = Math.ceil(total / limit);
   const router = useRouter();
   const searchParams = useSearchParams();

   const updatePage = useCallback(
      (newPage: number) => {
         const params = new URLSearchParams(searchParams.toString());
         params.set('page', String(newPage));
         router.push(`?${params.toString()}`);
      },
      [searchParams, router]
   );

   if (totalPages <= 1) return null;

   return (
      <div className="flex justify-center items-center gap-4 mt-6">
         <button
            onClick={() => updatePage(page - 1)}
            disabled={page <= 1}
            className="p-2 rounded-full bg-orange-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
         >
            <IconChevronLeft size={16} />
         </button>

         <span className="text-sm text-gray-600">
            {page} of {totalPages}
         </span>

         <button
            onClick={() => updatePage(page + 1)}
            disabled={page >= totalPages}
            className="p-2 rounded-full bg-orange-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
         >
            <IconChevronRight size={16} />
         </button>
      </div>
   );
}