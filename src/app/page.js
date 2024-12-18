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
import Footer from './_components/Footer';
import Transition from './_components/transition';

export default function Home() {
  return (
    <main>
      <Header />
      <VideoHero className="h-[200vh]" />
      <Frise />
      <div className="h-screen"/> {/* pour permettre de laisser la place au pin de la vidéo */}
      <SecondHero />
      <div className="h-10"/> {/* spacing */}
      <Annee80 className="h-screen"/>
      <div className="h-10"/> {/* spacing */}
      <Transition />
      <div className="h-10"/> {/* spacing */}
      <Annee90 className="h-screen"/>
      <div className="h-10"/> {/* spacing */}
      <Transition />
      <div className="h-10"/> {/* spacing */}
      <Annee2000 className="h-screen"/>
      <div className="h-10"/> {/* spacing */}
      <Transition />
      <div className="h-10"/> {/* spacing */}
      <Annee2010 className="h-screen"/>
      <div className="h-10"/> {/* spacing */}
      <Footer />
    </main>
  );
}
