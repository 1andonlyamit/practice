import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-pink-500 dark:text-pink-400 border-2 p-4 rounded-xl'>Welcome to Travel Hub</h1>
    <div className='flex gap-4 mt-4'>
    <Card goal="Travel" tagline="Let's Go" button="Chalo"/>
    <Card goal="Fun" tagline="Let's Laugh" button="Haso"/>
    <Card goal="Sadness" tagline="Let's Cry" button="Rovo"/>
    </div>
    </>
  )
}

export default App
