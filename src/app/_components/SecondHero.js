const SecondHero = () => {
  return (
    <div className="h-[50vh] flex flex-row">
      <div className="w-3/4">
        <h1 className="text-4xl text-center">La grande histoire du Mac</h1>
        <p>
          Voici une exposition virtuelle sur l'histoire du Mac d'Apple par
          décénnie
        </p>
      </div>
      <div className="h-fullw-1/4">
        <img
          src="images/steve_jobs_imac.png"
          alt="Steve Jobs et un iMac sur ses genoux"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default SecondHero;
