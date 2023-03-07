
import ClubName from "@/components/ClubName/ClubName";


import Skew2 from "@/components/Homepage";
import Head from "next/head";
import Carousel from "@/components/FestCarousel/Carousel";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      <Skew2/>
        
        <ClubName />



        {/* <p>SAC Website</p> */}
        <Carousel/>



      </main>
    </>
  );
}