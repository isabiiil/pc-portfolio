import React, { useState } from 'react';

export default function Content({show}) {

  function Ncwit() {
    console.log('step 2')
    return (
      <p>NCWIT FINALIST</p>
    )
  }

  function Codecademy() {
    return (
      <p>Codecademy Interview</p>
    )
  }

  switch(show) {
    case 'Ncwit':
      console.log('ncwit show');
      return (
        <div style={styles.container}>
          <Ncwit />
        </div>
      )
    case 'Codecademy':
      return (
        <div style={styles.container}>
          <Codecademy />
        </div>
      )
  };
  // return (
  //   <div style={styles.container}>Experiences</div>
  // )
}

const styles = {
  container: {
    width: '60vw',
    height: '60vh',
    margin: '0 auto',
    border: 'solid black 3px',
  }
}