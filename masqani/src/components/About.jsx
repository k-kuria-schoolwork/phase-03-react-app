import React from 'react'
import Back from "../Back"
import Heading from "../Heading"
import img from "../images/about.jpeg"

 const About = () => {
  return (
    <>
    <section className='about'>
        <Back name='About Us' title= 'Who are we?' cover={img} />
        <div className='left row'>
            <Heading title='Company Profile' subtitle='Our Story & Progress' />
            <p>Masqani properties</p>
            <p>Masqani properties</p>
        </div>
        <div className='right row'>
            <img src='./immio.jpg' alt='' />
        </div>
    </section>
    </>
   
  )
}
export default About