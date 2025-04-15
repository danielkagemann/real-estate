'use client';

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
      <div className="flex justify-center gap-4 mt-6">
         <button
            onClick={() => updatePage(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 rounded bg-gray-100 text-gray-700 border disabled:opacity-50"
         >
            Zurück
         </button>

         <span className="text-sm text-gray-600 pt-2">
            Seite {page} von {totalPages}
         </span>

         <button
            onClick={() => updatePage(page + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 rounded bg-gray-100 text-gray-700 border disabled:opacity-50"
         >
            Weiter
         </button>
      </div>
   );
}