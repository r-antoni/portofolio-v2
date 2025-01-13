//Next
import Image from 'next/image'
import Link from 'next/link'
//Components
import MagicButton from './ui/magic-button'

const Header = () => {
  return (
    <header className='absolute flex justify-between items-center top-4 w-full h-16 z-50 lg:px-[20px] xl:px-[50px]'>
      {/* Logo */}
        <Link href="/">
            <Image src="/logo.png" alt='Portofolio Logo' width={130} height={130} />
        </Link>
      {/* Hire Button */}
        <div className='pr-8'>
            <Link href="https://www.linkedin.com/in/reindra-antoni/">
                <MagicButton title='Hire Me' />
            </Link>
        </div>
    </header>
  )
}

export default Header