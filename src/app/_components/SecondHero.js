const SecondHero = () => {
  return (
    <div className="h-[50vh] flex flex-row max-w-4xl px-4 m-auto">
      <div className="w-3/4 flex flex-col">
        <h1 className="text-4xl">La grande histoire du Mac</h1>
        <p>
          Voici une exposition virtuelle sur l'histoire du Mac d'Apple par
          décénnie
        </p>
      </div>
      <div className="h-full w-1/4">
        <img
          src="images/steve_jobs_imac.png"
          alt="Steve Jobs et un iMac sur ses genoux"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SecondHero;
