import Image from 'next/image'
import Styles from '@/styles/Listing.module.css'

import Tale from "../../../public/assests/Tale.jpg"

import Link from 'next/link'

const Listing = () => {
 return (
  <>
   <div className={Styles.item}>
    <Link href='/components/t/Apoi'>
     <div className={Styles.image}>
      <Image src={Tale} alt="A Tale of Plague Innocence" width={500} height={300} priority />
      <div className={Styles.overlay}>
       <h2>A Tale of Plague Innocence</h2>
       <p>
        A Plague Tale: Innocence is an action-adventure game set in 14th century France. Players control two siblings as they navigate a world plagued by the Black Death. The game features stealth-based gameplay and includes puzzles and combat elements. It is known for its immersive storytelling and atmospheric visuals.
       </p>
      </div>
     </div>
    </Link>
   </div>
  </>
 )
}

export default Listing