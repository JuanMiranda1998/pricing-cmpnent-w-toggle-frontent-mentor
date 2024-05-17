import { useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('monthly')

  const checkHandler = () => {
    setPlan(plan === 'monthly' ? 'yearly' : 'monthly')
  }

  return (
    <div className='container w-[100vw] max-w-full lg:min-h-[100vh] flex flex-col items-center py-14 font-body font-bold text-grayish-blue bg-[#ecebf9] bg-[url("/bg-top.svg")] bg-no-repeat bg-[position:15rem_-2rem] bg-[length:75%]'>
      <h1 className="text-3xl">Our Pricing</h1>
      <div className='flex flex-row items-center gap-2 mt-8 mb-10'>
        <p className="text-sm text-[#a9a9b5]">Anually</p>
        <label className="toggle-switch md:mx-3">
          <input type="checkbox" onChange={checkHandler} />
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
        <p className="text-sm text-[#a9a9b5]">Monthly</p>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-[90%] flex flex-col items-center my-4 p-8 bg-white shadow-lg rounded-md'>
          <h2 className='text-lg'>Basic</h2>
          <p className='flex items-center gap-1 mt-4 text-dark-grayish-blue text-4xl'>$<span className="text-7xl">19.99</span></p>
          <p className='w-full text-center border-t border-b border-[#a9a9b5] mt-10 py-4'>500 GB Storage</p>
          <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>2 Users Allowed</p>
          <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>Send up to 3 GB</p>
          <button className='w-full py-3 px-4 mt-10 text-sm text-white rounded-md uppercase tracking-widest bg-gradient-to-r from-gradient-1 to-gradient-2'>Learn More</button>
        </div>
        <div className='w-[90%] flex flex-col items-center my-4 p-8 bg-gradient-to-b from-gradient-1 to-gradient-2 text-white shadow-lg rounded-md'>
          <h2 className='text-lg'>Professional</h2>
          <p className='flex items-center gap-1 mt-4 text-4xl'>$<span className="text-7xl">24.99</span></p>
          <p className='w-full text-center border-t border-b border-very-light-grayish-blue mt-10 py-4'>1 TB Storage</p>
          <p className='w-full text-center py-4 border-b border-very-light-grayish-blue'>5 Users Allowed</p>
          <p className='w-full text-center py-4 border-b border-very-light-grayish-blue'>Send up to 10 GB</p>
          <button className='w-full py-3 px-4 mt-10 text-sm bg-white text-gradient-2 rounded-md uppercase tracking-widest '>Learn More</button>
        </div>
        <div className='w-[90%] flex flex-col items-center my-4 p-8 bg-white shadow-lg rounded-md'>
          <h2 className='text-lg'>Master</h2>
          <p className='flex items-center gap-1 mt-4 text-dark-grayish-blue text-4xl'>$<span className="text-7xl">39.99</span></p>
          <p className='w-full text-center border-t border-b border-[#a9a9b5] mt-10 py-4'>2 TB Storage</p>
          <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>10 Users Allowed</p>
          <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>Send up to 20 GB</p>
          <button className='w-full py-3 px-4 mt-10 text-sm text-white rounded-md uppercase tracking-widest bg-gradient-to-r from-gradient-1 to-gradient-2'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default App
