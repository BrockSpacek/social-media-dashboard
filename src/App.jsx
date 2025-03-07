import { Button } from 'flowbite-react'
import './App.css'
import LargeCard from './components/LargeCard'
import SmallCard from './components/SmallCard'

function App() {
 

  return (
  <div>
    <h1 className='mt-10 ml-16 text-4xl font-bold'>Social Media Dashboard</h1>
    <p className='text-[#63687e] mb-10 ml-16 font-semibold'>Total Followers: 23,004</p>
    
      <LargeCard />
      <h1 className='text-5xl text-[#63687e] mt-16 ml-16'>Overview - Today</h1>
      <SmallCard />
  </div>
  )
}

export default App
