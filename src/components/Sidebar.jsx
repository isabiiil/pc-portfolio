import React, { useState } from 'react';
import Content, { NCWIT } from './Content';

import file from './../assets/documents.png';
import back from './../assets/back.png';
import craving from './../assets/craving.png';
import roblox from './../assets/roblox.jpg';
import oden from './../assets/oden.png';

import { root } from './../data/Sidebar';

export default function Sidebar() {
  const [page, setPage] = useState('root');

  function Root({setPage}) {
    return (
      <div style={styles.container} className="sidebar">
        {root.map(f => {
          return (
            <div style={styles.icon} onClick={() => setPage(f.link)}>
              <img src={f.icon} style={styles.image} />
              <p>{f.title}</p>
            </div>
          )
        })}
      </div>
    )
  };

  function News({setPage}) {
    return (
      <div style={styles.container} className="sidebar">
        <div style={styles.icon} onClick={() => setPage('root')}>
          <img src={back} style={styles.image} />
          <p>root directory</p>
        </div>
        <div style={styles.icon} onClick={() => {return <Content show="Ncwit" />}}>
          <img src={file} style={styles.image} />
          <p>NCWIT finalist</p>
        </div>
        <div style={styles.icon} onClick={() => Content('Codecademy')}>
          <img src={file} style={styles.image} />
          <p>Codecademy interview</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>MLH Top 50</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>#BUILTBYGIRLS campaign</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>NJII Code-a-thon Grand Prize Winner</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>CAYC interview</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Identification of novel phage</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>HK Maker Lab</p>
        </div>
      </div>
    )
  };

  function Work({setPage}) {
    return (
      <div style={styles.container} className="sidebar">
        <div style={styles.icon}>
          <img src={back} style={styles.image} onClick={() => setPage('root')} />
          <p>root directory</p>
        </div>
        <div style={styles.icon}>
          <img src={craving} style={styles.image} />
          <p>Craving</p>
        </div>
        <div style={styles.icon}>
          <img src={roblox} style={styles.image} />
          <p>Roblox</p>
        </div>
        <div style={styles.icon}>
          <img src={oden} style={styles.image} />
          <p>Oden Technologies</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>JumpButton Studio</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Research Foundation of City University of New York</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Caribou Health</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Fiera Capital Inc.</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>City University of New York: Registrar</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Khan's Tutorial</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Robert Wood Johnson University Hospital</p>
        </div>
        <div style={styles.icon}>
          <img src={file} style={styles.image} />
          <p>Columbia University Irving Medical Center</p>
        </div>
      </div>
    )
  }

  switch(page) {
    case 'root':
      return (
        <div>
          <Root setPage={setPage} />
        </div>
      )
    case 'news':
      return (
        <div>
          <News setPage={setPage} />
        </div>
      )
    case 'work':
      return (
        <div>
          <Work setPage={setPage} />
        </div>
      )
  };
}

const styles={
  container: {
    width: '12vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    position: 'absolute',
    left: '0',
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '75vh',
  },
  icon: {
    textAlign: 'center',
    fontFamily: 'Red Hat Mono',
    margin: '0 auto 2vw auto',
  },
  image: {
    width: '4vw',
    padding: '0 2.5vw',
  },
}