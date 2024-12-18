const Header = () => {
    return (
      <header>
        <nav className=" fixed top-0 left-0 right-0 py-3 backdrop-blur-xl bg-background/60 z-40 px-4">
        <a href="#" className="flex flex-row items-center">
          <img src="images/logo.png" alt="Logo d'Apple" className="h-8"/>
          <h1 className="font-labora text-xl"> / La grande histoire du Mac</h1>
        </a>
        </nav>
      </header>
    );
  };
  
  export default Header;