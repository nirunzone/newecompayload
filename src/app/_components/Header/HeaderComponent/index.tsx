'use client'

// import { Header } from 'next/dist/lib/load-custom-routes'
import React from 'react'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import Image from 'next/image'
import MobileNav from '../MobileNav'
import { HeaderNav } from '../Nav'
import { usePathname } from 'next/navigation'
import { noHeaderFooterUrls } from '../../../constants'

const HeaderComponent = ({header}:{header:Header}) => {
     const pathname = usePathname()
  return (
    <nav 
    className={[classes.header, noHeaderFooterUrls.includes
     (pathname) && classes.hide]
      .filter(Boolean)
      .join(' ')}>
        <Gutter className={classes.wrap}>
            <Link href= "/">
            {/* <Image src="/logo-black.svg" alt="logo" className={classes.logo} /> */}
            <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
            </Link>

            <HeaderNav header={header}/>
            {/* <MobileNav header={header} /> */}
           
        </Gutter>
    </nav>
  )
}

export default HeaderComponent