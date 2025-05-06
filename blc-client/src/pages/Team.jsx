import React from 'react'
import Title from '../components/Title'
import { team } from '../assets/assets'
import TeamCard from '../components/TeamCard'

const Team = () => {
  return (
    <div className='mt-3'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'THE'} text2={'TEAM'} />
        
        <div className='w-full flex flex-col gap-5 p-4 py-8'>
        {team.map((t, index) => (
            <TeamCard key={index} name={t.name} position={t.position} img={t.img} linkedin={t.linkedin} mail={t.mail} />
        ))}
        </div>
        
        </div>
    </div>
  )
}

export default Team
