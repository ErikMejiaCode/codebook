import { AllRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App dark:bg-dark">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AllRoutes darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
