import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './ui/ModeToggle'
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <nav>
                <ul className='flex items-center justify-between'>
                    <li>
                        <a href="https://santajitpatra.netlify.app"
                            className='pointer-events-none flex place-items-center gap-2 p-8'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                            className='dark:invert'
                                src={"/vercel.svg"}
                                alt='vercel logo'
                                width={100}
                                height={24}
                            />
                        </a>
                    </li>
                    <li>
                     <Link href="/games">Games</Link>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav