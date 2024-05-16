import { useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('monthly')

  const checkHandler = () => {
    setPlan(plan === 'monthly' ? 'yearly' : 'monthly')
  }

  return (
    <div className='container w-[100vw] max-w-full lg:min-h-[100vh] flex flex-col items-center py-10 font-body font-bold text-dark-grayish-blue bg-very-light-grayish-blue'>
      <h1 className="text-grayish-blue text-2xl">Our Pricing</h1>
      <div className='flex flex-row items-center gap-2 my-10'>
        <p className="text-xs md:text-sm">Monthly Billing</p>
        <label className="toggle-switch md:mx-3">
          <input type="checkbox" onChange={checkHandler} />
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
        <p className="text-xs md:text-sm">Yearly Billing</p>
      </div>
      <div className='my-4'>
        <h2>Basic</h2>
        <p>$<span className="text-3xl">19.99</span></p>
        <p>500 GB Storage</p>
        <p>2 Users Allowed</p>
        <p>Send up to 3 GB</p>
        <button>Learn More</button>
      </div>
      <div className='my-4'>
        <h2>Professional</h2>
        <p>$<span className="text-3xl">24.99</span></p>
        <p>1 TB Storage</p>
        <p>5 Users Allowed</p>
        <p>Send up to 10 GB</p>
        <button>Learn More</button>
      </div>
      <div className='my-4'>
        <h2>Master</h2>
        <p>$<span className="text-3xl">39.99</span></p>
        <p>2 TB Storage</p>
        <p>10 Users Allowed</p>
        <p>Send up to 20 GB</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default App
