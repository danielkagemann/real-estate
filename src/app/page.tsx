"use client";

import { ActionSearch } from '@/components/ActionSearch';
import { motion } from 'motion/react';

export default function Home() {

  return (
    <main>
      <motion.div className="flex flex-col p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }}>
        <h1 className="text-2xl p-0 m-0">real estate</h1>
        <small>find your dream home</small>
      </motion.div>
      <motion.div className="w-full h-[80vh] bg-no-repeat bg-cover bg-[url(/images/welcome.jpg)] flex flex-col justify-end"
        initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 1, ease: "backIn" }}>

        <motion.div transition={{ delay: 2 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <ActionSearch />
        </motion.div>
      </motion.div>
    </main >
  );
}
