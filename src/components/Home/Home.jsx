import React from 'react'
import Apresentacao from './components/Apresentacao/Apresentacao'
import StartNow from './components/StartNow/StartNow'
import Steps from './components/Steps/Steps'
import Benefits from './components/Benefits/Benefits'

const Home = () => {
  return (
    <main>
      <div className='container-home'>
        <Apresentacao/>
        <StartNow />
        <Steps/>
        <Benefits />
      </div>
    </main>
  )
}

export default Home