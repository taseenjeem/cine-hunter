import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext, ThemeContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <main className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
            <Footer />
          </main>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
