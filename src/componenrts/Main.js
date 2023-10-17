import React from 'react'
import Aside from './Aside'
import Section from './Section'

function Main() {
  return (
    <>
   <main className='row temp-border main-h m-0'>
   <Aside cls="left">left</Aside>
   <Section>section</Section>
   <Aside cls="right">right</Aside>
   </main>
    </>
  )
}

export default Main
