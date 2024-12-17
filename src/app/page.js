// import Image from "next/image";
import BackgroundVideo from './_components/backgroundVideo';
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
      <BackgroundVideo />
    </main>
  );
}
