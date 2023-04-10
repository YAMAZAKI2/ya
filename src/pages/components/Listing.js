import Image from 'next/image'
import Styles from '@/styles/Listing.module.css'
import battlefield from "../../../public/assests/BV.jpg"
import Battlefield1 from "../../../public/assests/battlefield1.jpg"
import Tale from "../../../public/assests/Tale.jpg"
import Rise from "../../../public/assests/Rise.jpg"
import Shadow from "../../../public/assests/shadow.jpg"
import Spirit from "../../../public/assests/spirit.jpg"
import Link from 'next/link'

const Listing = () => {
 return (
  <>
   <h2 className={Styles.post}> All Posts</h2>
   <div className={Styles.container}>
    <div className={Styles.item}>
     <Link href='/components/t/Bv'>

      <div className={Styles.image}>
       <Image src={battlefield} alt="BattlefieldV" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Battlefield V</h2>
        <p>
         Battlefield V is a popular first-person shooter game set in World War II. It features both single-player and multiplayer modes, and includes new game modes, vehicles, weapons, and gadgets for players to use. The game also introduces a new "Fortifications" system and "War Stories" mode, providing players with a unique and immersive experience of the war.
        </p>
       </div>
      </div>

     </Link>
    </div>

    <div className={Styles.item}>
     <Link href='/components/t/B1'>
      <div className={Styles.image}>
       <Image src={Battlefield1} alt="Battlefield1" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Battlefield 1</h2>
        <p>
         Battlefield 1 is a first-person shooter game set in World War I, developed by EA DICE and published by Electronic Arts. The game introduces new features such as dynamic weather and destructible environments, and includes new vehicles and weapons, such as tanks, planes, and flamethrowers. Battlefield 1 is known for its stunning visuals, immersive gameplay, and realistic depiction of World War I.
        </p>
       </div>
      </div>
     </Link>
    </div>
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
    <div className={Styles.item}>
     <Link href='/components/t/Rotr'>
      <div className={Styles.image}>
       <Image src={Rise} alt="Rise of the tomb raider" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Rise Of The Tomb Raider</h2>
        <p>Rise of the Tomb Raider is an action-adventure game sequel to the Tomb Raider franchise. Players follow Lara Croft as she searches for the lost city of Kitezh, using a mix of exploration, puzzle-solving, and combat. The game includes new weapons and abilities and is known for its stunning visuals and engaging gameplay.</p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/t/Sotr'>
      <div className={Styles.image}>
       <Image src={Shadow} alt="Shadow of the tomb raider" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Shadow Of The Tomb Raider</h2>
        <p>Shadow of the Tomb Raider is an action-adventure game and the third installment in the Tomb Raider reboot series. Players follow Lara Croft as she tries to stop a Mayan apocalypse, using a mix of exploration, puzzle-solving, and combat. The game includes new customization options and is known for its stunning graphics and immersive gameplay.
        </p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/t/Sotn'>
      <div className={Styles.image}>
       <Image src={Spirit} alt="Article 3" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Spirit Of The North</h2>
        <p>
         Spirit of the North is an adventure game developed by Infuse Studio. Players control a fox who must explore a beautiful, mystical world inspired by Nordic folklore. The game features puzzle-solving and exploration elements and emphasizes the bond between the fox and the environment. It is known for its stunning visuals, atmospheric soundtrack, and emotional storytelling.
        </p>
       </div>
      </div>
     </Link>
    </div>
   </div>
  </>
 )
}

export default Listing