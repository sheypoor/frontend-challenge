import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a
        href="https://www.sheypoor.com/listing/new"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        افزودن آگهی تازه
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a
        href="https://www.sheypoor.com/download"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        درباره‌ی ما
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a
        href="http://blog.sheypoor.com/"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        وبلاگ
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a
        href="https://sheypoor.uservoice.com/knowledgebase"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        دانشنامه
      </a>
    </Typography>
  </ul>
)

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const toggleMenuIcon = () => window.innerWidth >= 960 && setOpenNav(false)

    window.addEventListener('resize', toggleMenuIcon)
    return () => window.removeEventListener('resize', toggleMenuIcon)
  }, [])

  return (
    <header>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex flex-row-reverse items-center justify-end text-blue-gray-900 lg:flex-row lg:justify-between">
          <Typography
            as={Link}
            href="/"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>شیپور من</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>نام‌نویسی</span>
          </Button>
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <FiX fontSize={20} /> : <FiMenu fontSize={20} />}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>نام‌نویسی</span>
          </Button>
        </MobileNav>
      </Navbar>
    </header>
  )
}

export default Header
