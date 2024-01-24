import bellIcon from "./assets/ring.svg";
import moonIcon from "./assets/icons/moon.svg";
import sunIcon from "./assets/icons/sun.svg";
import logo from "./assets/logo.svg";
import cartIcon from "./assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <>
      {showCart && <CartDetails onCloseCartModal={() => setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={bellIcon} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? sunIcon : moonIcon}
                  width={24}
                  height={24}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCart}
              >
                <img src={cartIcon} width={24} height={24} alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-20px] left-[14px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
