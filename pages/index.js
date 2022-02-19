import Head from 'next/head';
import Header from "../components/Header";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Landing_page from "../components/Landing_page";
import Timeline from "../components/Timeline";
import Footer from '../components/Footer';
import Stats from "../components/Stats";
import ImgSlider from "../components/ImgSlider";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoTop from "../components/GoTop";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  },[]);

    return (
    <div className="">
      <Head>
        <title>NEO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
              integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous" />
          1
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <GoTop/>
        <Header/>
        <Landing_page/>
        <About/>
        
        <div className="bg_contact bg-contain lg:bg-cover bg-fixed">
        <Timeline/>
        <div className="bg-white">
        <Stats/>
        <ImgSlider/>
        <FAQ/>
        </div>
        <Contact/>
        </div>
        <Footer/>
        
      </main>
    </div>
  )
}