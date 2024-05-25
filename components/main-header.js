'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import Image from "next/image";
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'
export default function MainHeader(){
    const path=usePathname();

    return <header className={classes.header}>
         <Link href='/' className={classes.logo}>
         <Image src={logo.src} alt="Logo" width={50} height={50} priority /> 
            Next Level Food
         </Link>
    <nav className={classes.nav}>
        <ul>
            <li><Link href='/meals' 
            className={path.startsWith('/meals')?classes.active:undefined}
            >Meals</Link></li>
             
             <li><Link href='/community'
              className={path==='/community'?classes.active:undefined}
             >Community</Link></li>      
        </ul>
    </nav>

    </header>
}