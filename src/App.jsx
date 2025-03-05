import { Button } from 'flowbite-react'
import './App.css'
import LargeCard from './components/LargeCard'
import SmallCard from './components/SmallCard'

function App() {
 

  return (
  <div>
    <h1>Social Media Dashboard</h1>
    <p>Total Followers: 23,004</p>
    <Button />
      <LargeCard />
      <h1 className='text-5xl '>Overview - Today</h1>
      <SmallCard />
  </div>
  )
}

export default App
