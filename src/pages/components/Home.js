import Styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Header from './Header.js'
const Home = () => {
 return (
  <>
   <Head>
    <title>Home</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <Header />
   <main className={Styles.main}>



    <div className={Styles.p}>
     <p>
      As a passionate gamer, I have always been fascinated by the game development and testing. Over time, I have developed a talent for identifying and reporting bugs in games. Through hours of playing and testing, I have learned to thoroughly explore every aspect of games to uncover even the hardest-to-find issues.

      This portfolio is where I share my findings with the world, including fellow developers.</p>

     <p> I believe that gaming is a powerful medium that can bring people together, spark imagination, and create unforgettable experiences. By playing my part in finding and fixing bugs, I hope to contribute to the growth and success of the gaming industry.
     </p>


    </div>
   </main>
  </>
 )
}

export default Home