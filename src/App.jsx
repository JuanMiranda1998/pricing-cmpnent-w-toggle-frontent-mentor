import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('monthly')
  const [values, setValues] = useState([])

  const checkHandler = () => {
    setPlan(plan === 'monthly' ? 'yearly' : 'monthly')
  }
  
  const PRICES = [
    {
      paymentType: 'monthly',
      plans: {
        basic: {
          price: 19.99,
          storage: '500 GB',
          users: 2,
          sendAllowed: '3 GB'
        },
        professional: {
          price: 24.99,
          storage: '1 TB',
          users: 5,
          sendAllowed: '10 GB'
        },
        master: {
          price: 39.99,
          storage: '2 TB',
          users: 10,
          sendAllowed: '20 GB'
        },
      }
    }, 
    {
      paymentType: 'yearly',
      plans: {
        basic: {
          price: 199.99,
          storage: '500 GB',
          users: 2,
          sendAllowed: '3 GB'
        },
        professional: {
          price: 249.99,
          storage: '1 TB',
          users: 5,
          sendAllowed: '10 GB'
        },
        master: {
          price: 399.99,
          storage: '2 TB',
          users: 10,
          sendAllowed: '20 GB'
        },
      }
    }
  ];

  useEffect(() => {
    setValues(PRICES.find(planType => planType.paymentType === plan));
  },[plan])


  return (
      <div className='container w-[100vw] max-w-full lg:min-h-[100vh] flex flex-col items-center py-14 font-body font-bold text-grayish-blue bg-[#ecebf9] bg-[url("/bg-top.svg")] bg-no-repeat bg-[position:15rem_-2rem] lg:bg-[position:100%_-2rem] bg-[length:75%] lg:bg-[length:25%_80%] relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 md:bg-[url("/bg-bottom.svg")]  bg-no-repeat bg-left-bottom z-0' />
        <h1 className="text-3xl">Our Pricing</h1>
        <div className='flex flex-row items-center gap-2 mt-8 mb-10'>
          <p className="text-sm text-[#a9a9b5]">Anually</p>
          <label className="toggle-switch md:mx-3 md:my-0">
            <input type="checkbox" onChange={checkHandler} />
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
          <p className="text-sm text-[#a9a9b5]">Monthly</p>
        </div>
        <div className='w-full max-w-[500px] lg:max-w-[85%] flex flex-col lg:flex-row items-center justify-center z-10'>
          <div className='w-[90%] flex flex-col items-center my-4 p-8 bg-white shadow-lg rounded-md md:rounded-none md:rounded-l-md'>
            <h2 className='text-lg'>Basic</h2>
            <p className='flex items-center gap-1 mt-4 text-dark-grayish-blue text-4xl'>$<span className="text-7xl">{values.plans?.basic.price}</span></p>
            <p className='w-full text-center border-t border-b border-[#a9a9b5] mt-10 py-4'>{values.plans?.basic.storage} Storage</p>
            <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>{values.plans?.basic.users} Users Allowed</p>
            <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>Send up to {values.plans?.basic.sendAllowed}</p>
            <button className='w-full py-3 px-4 mt-10 text-sm text-white rounded-md uppercase tracking-widest bg-gradient-to-r from-gradient-1 to-gradient-2 hover:bg-none hover:text-gradient-2 border border-transparent hover:border-gradient-2 transition-colors ease-in duration-150'>Learn More</button>
          </div>
          <div className='w-[90%] flex flex-col items-center my-4 p-8 md:py-14 md:px-8 bg-gradient-to-b from-gradient-1 to-gradient-2 text-white shadow-lg rounded-md'>
            <h2 className='text-lg'>Professional</h2>
            <p className='flex items-center gap-1 mt-4 text-4xl'>$<span className="text-7xl">{values.plans?.professional.price}</span></p>
            <p className='w-full text-center border-t border-b border-very-light-grayish-blue mt-10 py-4'>{values.plans?.professional.storage} Storage</p>
            <p className='w-full text-center py-4 border-b border-very-light-grayish-blue'>{values.plans?.professional.users} Users Allowed</p>
            <p className='w-full text-center py-4 border-b border-very-light-grayish-blue'>Send up to {values.plans?.professional.sendAllowed}</p>
            <button className='w-full py-3 px-4 mt-10 text-sm bg-white text-gradient-2 rounded-md uppercase tracking-widest hover:bg-transparent border border-transparent hover:border-white hover:text-white transition-colors ease-in duration-150'>Learn More</button>
          </div>
          <div className='w-[90%] flex flex-col items-center my-4 p-8 bg-white shadow-lg rounded-md md:rounded-none md:rounded-r-md'>
            <h2 className='text-lg'>Master</h2>
            <p className='flex items-center gap-1 mt-4 text-dark-grayish-blue text-4xl'>$<span className="text-7xl">{values.plans?.master.price}</span></p>
            <p className='w-full text-center border-t border-b border-[#a9a9b5] mt-10 py-4'>{values.plans?.master.storage} Storage</p>
            <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>{values.plans?.master.users} Users Allowed</p>
            <p className='w-full text-center py-4 border-b border-[#a9a9b5]'>Send up to {values.plans?.master.sendAllowed}</p>
            <button className='w-full py-3 px-4 mt-10 text-sm text-white rounded-md uppercase tracking-widest bg-gradient-to-r from-gradient-1 to-gradient-2 hover:bg-none hover:text-gradient-2 border border-transparent hover:border-gradient-2 transition-colors ease-in duration-150'>Learn More</button>
          </div>
        </div>
      </div>
  )
}

export default App
