'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
   useEffect(() => {
      console.error('Fehler:', error);
   }, [error]);

   return (
      <html>
         <body>
            <main>

               <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h2>
               <p>To be honest, we did not expect that. We feel shocked like you. Try again or navigate to a different page.</p>
               <button
                  onClick={() => reset()}
                  className="p-2 bg-orange-600 text-white rounded-xl"
               >
                  try again
               </button>

            </main>
         </body>
      </html>
   );
}