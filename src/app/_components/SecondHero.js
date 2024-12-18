const SecondHero = () => {
  return (
    <div className="h-[70vh] flex flex-row max-w-6xl px-4 m-auto">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-5xl">La grande histoire du Mac</h1>
        <p>
          L'exposition virtuelle sur l'histoire du Mac d'Apple par
          décénnie.
        </p>
      </div>
      <div className="h-full w-1/2 flex items-center justify-center">
        <img
          src="images/steve_jobs_imac.png"
          alt="Steve Jobs et un iMac sur ses genoux"
          className="w-2/3"
        />
      </div>
    </div>
  );
};

export default SecondHero;
