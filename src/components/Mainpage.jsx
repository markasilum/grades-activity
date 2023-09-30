import React from 'react'
import GradesTable from './GradesTable'



const Mainpage = () => {
  return (
    <aside id="mainpage" className="fixed top-0 left-1/4 z-45 w-4/5 h-screen transition-transform -translate-x-full sm:translate-x-0 mx-6 right-8" aria-label="mainpage">
      <div className='h-full px-6 py-6 overflow-y-auto bg-gray-50 '>
        <GradesTable></GradesTable>
      </div>
    </aside>
  )
}

export default Mainpage