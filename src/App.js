import React, { useRef } from "react";
import Landing from "./components/Landing";
import arrow from './assets/arrow.png';
import Sidebar from "./components/Sidebar";
import Content from './components/Content'
import Desktop from "./components/Desktop";

export default function App() {
  const ServicesRef = useRef(null);
  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <>
      <Landing />
      <button onClick={gotoServices}><img src={arrow} style={styles.button}/></button>
      <Desktop />
      {/* <small style={styles.footer}>(c) Isabel Sofia V. Abonitalla</small> */}
    </>
  )
}

const styles={
  button: {
    position: 'absolute',
    bottom: '2vh',
    left: '48vw',
    height: '4vw',
  },
  footer: {
    fontFamily: 'Poppins',
    margin: '20px auto',
    position: 'absolute',
    bottom: '0',

  }
}