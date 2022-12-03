import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const Home = () => {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>
      <>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We,re not always in the position that we want to be at. We,re
            constantly growing. We,re constantly making mistakes. We,re
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We,re not always in the position that we want to be at. We,re
            constantly growing. We,re constantly making mistakes. We,re
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We,re not always in the position that we want to be at. We,re
            constantly growing. We,re constantly making mistakes. We,re
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}

export default Home
