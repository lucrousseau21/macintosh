// import Image from "next/image";
import VideoHero from './_components/videoHero';
import Header from './_components/header';
import Hello from './_components/hello';
import HelloIMG from './_components/helloIMG';

export default function Home() {
  return (
    <main>
      <p>test</p>
      <Header />
      <Hello />
      <HelloIMG />
      <VideoHero />
    </main>
  );
}
