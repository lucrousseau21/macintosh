const Header = () => {
    return (
      <header>
        <nav className=" fixed top-0 left-0 right-0 py-3 backdrop-blur-xl bg-background/60 z-40">
        <div className="flex flex-row items-center">
          <img src="images/logo.png" alt="Logo d'Apple" className="h-10"/>
          <h1 className=" text-xl"> / La grande histoire du Mac</h1>
        </div>
        </nav>
      </header>
    );
  };
  
  export default Header;