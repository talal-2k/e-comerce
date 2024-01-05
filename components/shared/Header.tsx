import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='w-full borrder-b'>
        <div className='wrapper flex items-center justify-between'>
        <Link href="/" className="w-36">
          <Image 
            src="./assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>

        <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs '>
          <MobileNav />
        </nav>
        </SignedIn>
        <div className='rounded-full'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <NavItems />
          </SignedIn>
          <SignedOut>
          <Button asChild className='rounded-full' size="lg">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          </SignedOut>
        </div>
        </div>
        </header>
  )
}

export default Header