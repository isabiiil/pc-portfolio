import React from 'react';
import border from './../assets/browser.png';
import quote from './../assets/codecademyQuote.png';

export function Default() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <p>Choose a file.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Ncwit() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2021-ncwit-collegiate">The National Center for Women & Information Technology (NCWIT) Selects Finalists for the 2021 NCWIT Collegiate Award</a></h1>
        <small>January 2021</small>
        <br /><br />
        <p style={styles.text}>I entered the competition with my research project titled: <b style={styles.bold}>Applying frontal cortex metabolites quantified by 7-Tesla <sup style={styles.superscript}>1</sup>H-MRS to predict multiple sclerosis subtype through recursive partitioning and conditional inference trees</b>. In layman's terms, we measured the brain chemical levels of both healthy patients and patients with multiple sclerosis, then applied machine learning models to predict what kind of multiple sclerosis the patient has. I envisioned this project to aid in the diagnosis of the disease, but the accuracy of my models was insufficient for publication. I still learned a lot from this project, and that's what matters.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Codecademy() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://news.codecademy.com/interview-isabel-chapter-leader/">An interview with Isabel Abonitalla: Chapter leader, student, and entrepreneur</a></h1>
        <p style={styles.text}>We couldn't be more excited to introduce you to Isabel Abonitalla — a computer science and biology student, programmer, entrepreneur, and one of the leaders of Codecademy's CUNY Tech chapter. CUNY Tech is the Codecademy Community chapter made up of the schools in the City University of New York school system, led by Isabel and a team of 4 other students.</p>
        <img src={quote} style={styles.quote} />
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Mlh() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://top.mlh.io/2020/profiles/isabel-abonitalla">MLH Top 50, Class of 2020</a></h1>
        <p style={styles.text}>I was named one of Major League Hacking's Top 50 Hackers in 2020. Out of 100,000 students who participated in hackathons, my story was one of 50 that was recognized on this list due to my projects and impact on other students in the community.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Bbg() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://youtu.be/ae2pofZ5L1Q">#BUILTBYGIRLS International Women's Day 2019 Campaign</a></h1>
        <p style={styles.text}>The co-founders of Shine, Naomi Hirabayashi and Marah Lidey, sit with Isabel, computer science student, to talk about shifting workspace culture to celebrate an employee's whole self and life outside of work.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Njii() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://www.njii.org/">New Jersey Innovation Institute: Maternal Mortality and Morbidity Code-a-thon</a></h1>
        <p style={styles.text}>The New Jersey Innovation Institute, an NJIT corporation, in collaboration with the New Jersey Department of Health hosted a code-a-thon on Jan. 26 and Jan. 27 in Newark.<br /><br />The event involved a student competition where participants were asked to create, within 24-hours, a smartphone app for pregnant and postpartum women to help them learn about risk factors, to self-assess post-birth warning signs, and, when necessary, to prompt action and inform them about care options.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
}

export function Cayc() {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>
        <h1 style={styles.title}><a href="https://www.youtube.com/watch?v=-R3UXu-Ztn8">Consortium Alumni Youth Council member Isabel Abonitalla talks about her experience in the Urban Barcode Research Project and the Hypothekids HK Maker Lab Program.</a></h1>
        <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img src={border} style={styles.browser} />
    </div>
  )
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
    height: '460px',
    width: '1096px',
    margin: '146px 18px',
    padding: '20px',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: '600',
    marginBottom: '10px',
    lineHeight: '1.2em',
  },
  text: {
    fontSize: '1.2em',
    lineHeight: '1.5em',
  },
  bold: {
    fontWeight: '600',
  },
  superscript: {
    fontSize: '0.7em',
    verticalAlign: 'super',
  },
  quote: {
    width: '28vw',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  }
}