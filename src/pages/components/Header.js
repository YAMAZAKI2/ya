import Styles from '@/styles/Home.module.css'
import Link from 'next/link'
const Header = () => {
 return (
  <div className={Styles.nav}>
   <nav>
    <ul>
     <li>
      <Link href="/">
       <>Home</>
      </Link>
     </li>
     <li>
      <Link
       href='/components/Testreports'>
       <>Test Reports </>
      </Link>
     </li>
     <li>
      <Link href="/components/Contact">
       <>Contact</>
      </Link>
     </li>
    </ul>
   </nav>
  </div>
 )
}

export default Header