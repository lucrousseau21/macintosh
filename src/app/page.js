// import Image from "next/image";
import VideoHero from './_components/videoHero';
import Header from './_components/header';
import Hello from './_components/hello';
import HelloIMG from './_components/helloIMG';
import Frise from './_components/frise';
import Annee80 from './_components/1980s';
import Annee90 from './_components/1990s';
import Annee2000 from './_components/2000s';
import Annee2010 from './_components/2010s';
import SecondHero from './_components/SecondHero';

export default function Home() {
  return (
    <main>
      <Header />
      <Frise />
      <VideoHero className="h-[200vh]" />
      <div className="h-screen"></div> {/* pour permettre de laisser la place au pin de la vidéo */}
      <SecondHero />
      <Annee80 className="h-screen"/>
      <Annee90 className="h-screen"/>
      <Annee2000 className="h-screen"/>
      <Annee2010 className="h-screen"/>
    </main>
  );
}
