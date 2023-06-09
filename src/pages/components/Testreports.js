import Head from "next/head"
import Header from "./Header"
import Link from "next/link"
import Styles from '@/styles/Testreports.module.css';
const Testreports = () => {
 return (
  <>
   <Head>
    <title>Test Reports</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header />
   <br />
   <br />
   <div className={Styles.container}>
    <h1 className={Styles.h1}>Test Reports</h1>
    <div>
     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqAE77o9OU4hAEg7K?e=Nx5fkz"} target="_blank"><h2>Battlefield V</h2></Link>

     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqAPsJPquXHuKmTAT?e=tdLCpu"} target="_blank"><h2>Battlefield 1</h2></Link>

     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqAXxz7hdwrceuyif?e=sBUbPS"} target="_blank"><h2>A Tale of Plague Innocence</h2></Link>

     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqActT-AfBgKDH20r?e=bkZWfO"} target="_blank"><h2>Rise Of The Tomb Raider</h2></Link>

     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqAlq2MLZpeRvd9sZ?e=kbzYjv"} target="_blank"><h2>Shadow Of The Tomb Raider</h2></Link>

     <Link href={"https://1drv.ms/w/s!ApU8KwBJGWfQqAsmzhtgm-aJTFkM?e=QFdnVR"} target="_blank"><h2>Spirit Of The North</h2></Link>
    </div>
   </div>
  </>
 )
}

export default Testreports