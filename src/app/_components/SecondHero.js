const SecondHero = () => {
  return (
    <div className="h-[70vh] flex flex-row max-w-6xl px-4 py-16 m-auto border-b-2">
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-5xl">La grande histoire du Mac</h1>
        <p className="text-lg"> 
          L'exposition virtuelle sur l'histoire du Mac d'Apple par
          décénnie.
        </p>
        <a href="#1980" className="bg-blue-500 w-fit text-white text-lg px-5 py-2 rounded-full border-2 border-blue-500 hover:bg-white hover:text-blue-500 hover:shadow-xl hover:shadow-blue-300">Découvrir</a>
      </div>
      <div className="h-full w-1/2 flex items-center justify-center pb-8">
        <img
          src="images/steve_jobs_imac.png"
          alt="Steve Jobs et un iMac sur ses genoux"
          className="w-3/5"
        />
      </div>
    </div>
  );
};

export default SecondHero;
