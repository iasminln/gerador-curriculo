import React from 'react'
import Apresentacao from './components/Apresentação'
import StartNow from './components/StartNow'
import Steps from './components/Steps'

const Home = () => {
  return (
    <main>
      <div className='container-home'>
        <Apresentacao/>
        <StartNow />
        <Steps/>
      </div>
    </main>
  )
}

export default Home