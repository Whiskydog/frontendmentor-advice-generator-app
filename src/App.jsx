import { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";
import patternDividerMobile from "./assets/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/pattern-divider-desktop.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [slip, setSlip] = useState(null);

  async function fetchSlip() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice/71");
      const data = await response.json();
      setSlip(data.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    setLoading(true);
    fetchSlip();
  }

  useEffect(() => {
    fetchSlip();
  }, []);

  return (
    <main>
      {loading ? (
        <RotateLoader
          loading={loading}
          color="hsl(150, 100%, 66%)"
          size={16}
          cssOverride={{
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
          aria-label="Loading"
        />
      ) : (
        <>
          <p>Advice #{slip.id}</p>
          <h1>&ldquo;{slip.advice}&rdquo;</h1>
        </>
      )}
      <img
        srcSet={`${patternDividerMobile} 295w, ${patternDividerDesktop} 444w`}
        sizes="(min-width: 768px) 444px, 295px"
        src={patternDividerMobile}
        alt=""
      />
      <button aria-label="Get New Advice" onClick={handleClick}></button>
    </main>
  );
}

export default App;
