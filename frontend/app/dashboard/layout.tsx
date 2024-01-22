import React from 'react'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <nav className="w-full flex justify-center bg-black text-white">
        This is a shared navbar for Dashboard segment
      </nav>
      {children}
    </div>
  )
}

export default ProfileLayout
