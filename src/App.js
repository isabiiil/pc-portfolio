import React, { useRef } from "react";
import Landing from "./components/Landing";
import arrow from './assets/arrow.png';
import Sidebar from "./components/Sidebar";
import Content from './components/Content'

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
      {/* <Experiences ref={ServicesRef}/> */}
      <Sidebar />
      {/* <Content show="NCWIT" /> */}
    </>
  )
}

const styles={
  button: {
    position: 'absolute',
    bottom: '2vh',
    left: '48vw',
    height: '4vw',
  }
}