'use client'

import { motion } from 'framer-motion'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'

const FloatingButton: React.FC = () => (
  <motion.div
    className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-accent/85 transition"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <Link href="/" passHref>
      <AiOutlineHome className="w-6 h-6" />
    </Link>
  </motion.div>
)

export default FloatingButton
