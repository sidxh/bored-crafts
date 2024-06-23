
import React from 'react'
import { 
  LumaCalendar,
  LumaEvents,
  LumaEventsCard,
  LumaEventsNavbar,
  LumaContainer,
  LumaHero,
  LumaBody,
  LumaNavbar
} from '@/components/(specificSubComponents)/luma-clone/LumaAll';

const LumaClone = () => {
  return (
    <LumaContainer>
      <LumaNavbar />
      <LumaHero />
      <LumaBody>
        <LumaEvents>
          <LumaEventsNavbar />
          <LumaEventsCard 
              date="Today" 
              day="Thursday"
              time="10:30 AM"
              name="lab #1 -- decide on your idea."
              instructors="farza and stavan"
              image="lab-ideas.png"
              />
          <LumaEventsCard 
              date="June 25" 
              day="Tuesday"
              time="10:30 AM"
              name="lecture #2 -- build a toy."
              instructors="farza and stavan"
              image="lecture-build-a-toy.png"
          />
          <LumaEventsCard 
              date="June 27" 
              day="Thursday"
              time="10:30 AM"
              name="lab #2 -- plan it and build it."
              instructors="farza and stavan"
              image="lab-build-a-toy.png"
          />
        </LumaEvents>
        <LumaCalendar />
      </LumaBody>
    </LumaContainer>
  )
}

export default LumaClone