'use client'
import { useProfile } from '@/context/resumeContext'
import Navbar from './Navbar'

export const Header = () => {
  const { profile } = useProfile()

  return (
    <header className="sticky top-0 z-1 p-4	flex justify-center bg-primary">
      <div className="flex justify-between w-full items-center lg:w-[1024px]">
        <h3 className="text-2xl font-semibold text-black">{profile.name}</h3>
        <Navbar />
      </div>
    </header>
  )
}
