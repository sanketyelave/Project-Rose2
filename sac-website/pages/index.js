import ClubName from "@/components/ClubName/ClubName";
import Skew2 from "@/components/HomePage/Homepage";
import Head from "next/head";

import Announcement from "../components/Announcement/Announcement";
import SocietyRepresentative from "../components/SocietyRepresentative/SocietyRepresentative";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Aboutsac from "@/components/DeanSpeaks/DeanSpeaks";
import Deanspeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyGallery from "../components/SocietyGallery/SocietyGallery";
// import ClubHero from "@/components/ClubHero/ClubHero";
import AboutPage from "../components/AboutPage/AboutPage";
import Gallery from "@/components/Gallery/Gallery";

import ContactPage from "@/components/ContactPage/ContactPage";

import HomePageMobile from "@/components/HomePageMobile";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import Carousel from "../components/FestCarousel/Carousel";
import AboutNITR from "@/components/AboutPage/AboutNITR";
export default function Home() {
  return (
    <>
      <Head>
        <title>Student Activity Center, NIT Rourkela</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="SAC NITR,Explore the plethora of thrilling events, exciting
              fests, diverse clubs and other activities in the
            beautiful campus of NIT Rourkela."
        />
        <meta
          name="keywords"
          content="sacnitr,sacnitrkl,sacnitrourkela, sac, club nitr, club, clubnitr, clubnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,societies nitrkl,societiesnitrkl"
        />
        <meta
          name="description"
          content="Official Website of SAC NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sacnitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="sac 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HomePageMobile />
        <Skew2 />
        <AboutNITR
          data="Director Speaks"
          img="https://res.cloudinary.com/webwiznitr/image/upload/v1679148287/Director_NIT_Rourkela_twwguz.png"
          description="I would request the students to have a little patience. Staying at home might have gotten boring now but I hope that they don’t feel disturbed. Today’s young generation is very vibrant, and they do not want to be stuck within the same four walls. But, the situation doesn’t allow us to have all the flexibility which we wish to have. I hope after the pooja vacations things change and soon all the students will be asked to return to campus."
        />
        <Deanspeaks
          data="President SAC Speaks"
          image="https://res.cloudinary.com/de2s0mcjo/image/upload/v1695409082/IMG-20230913-WA0135_nanw4l.jpg"
          description="I would request the students to have a little patience. Staying at home might have gotten boring now but I hope that they don’t feel disturbed. Today’s young generation is very vibrant, and they do not want to be stuck within the same four walls. But, the situation doesn’t allow us to have all the flexibility which we wish to have. I hope after the pooja vacations things change and soon all the students will be asked to return to campus."
        />
        <Announcement />
        <SocietyRepresentative />
        <Carousel />
        <Gallery />
        <FAQ />
      </main>
    </>
  );
}
