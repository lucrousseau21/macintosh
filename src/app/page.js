// import Image from "next/image";
import VideoHero from './_components/videoHero';
import Header from './_components/header';
import Hello from './_components/hello';
import HelloIMG from './_components/helloIMG';
import Frise from './_components/frise';
import Annee80 from './_components/1980s';

export default function Home() {
  return (
    <main>
      <Header />
      <Frise />
      {/* <Hello /> */}
      <HelloIMG />
      <VideoHero className="h-[200vh]" />
      <div className="h-screen"></div>
      <Annee80 className="h-screen"/>
    </main>
  );
}
