import React from 'react';
import border from './../assets/browser.png';

export default function Content({show}) {
  switch(show) {
    case 'Ncwit':
      return (
        <div style={styles.container}>
          <div style={styles.textbox}>
            <h1><a href="https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2021-ncwit-collegiate">The National Center for Women & Information Technology (NCWIT) Selects Finalists for the 2021 NCWIT Collegiate Award</a></h1>
          </div>
          <img src={border} style={styles.browser} />
        </div>
      )
    case 'Codecademy':
      return (
        <div style={styles.container}>
          <div style={styles.textbox}>
            <p>Choose a file.</p>
          </div>
          <img src={border} style={styles.browser} />
        </div>
      )
    default:
      return (
        <div style={styles.container}>
          <div style={styles.textbox}>
            <p>Choose a file.</p>
          </div>
          <img src={border} style={styles.browser} />
        </div>
      )
  };
  // return (
  //   <div style={styles.container}>Experiences</div>
  // )
}

const styles = {
  container: {
    position: 'relative',
    left: '15vw',
  },
  browser: {
    position: 'absolute',
    height: '75vh',
    zIndex: '-9',
  },
  textbox: {
    position: 'absolute',
    zIndex: '9',
    float: 'left',
    fontFamily: 'Poppins',
    height: '510px',
    width: '1204px',
    margin: '160px 20px',
    padding: '10px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  }
}