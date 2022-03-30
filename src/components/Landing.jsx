import Typewriter from 'typewriter-effect';

export default function Landing() {
  return(
    <div className='landing'>
      <div style={styles.typewriter}>
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello I am ')
            .typeString('<span style="color: #B75E9A; -webkit-text-stroke: 2px black;">Isabel</span>')
            .pauseFor(300)
            .deleteChars(6)
            .typeString('<span style="color: #FCC875; -webkit-text-stroke: 2px black;">a software engineer</span>')
            .pauseFor(600)
            .deleteChars(19)
            .typeString('<span style="color: #6EC6C3; -webkit-text-stroke: 2px black;">a hackathon junkie</span>')
            .pauseFor(600)
            // .deleteChars(23)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          skipAddStyles: true,
          delay: 50,
          deleteSpeed: 50,
        }}
      />
      </div>
      <p style={styles.headline}>CUNY Hunter College | Major League Hacking | CUNY Hackathon</p>
    </div>
  );
}

const styles = {
  typewriter: {
    fontFamily: 'Red Hat Mono',
    fontWeight: '700',
    fontSize: '4vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '40vh 2vw 0 2vw',
  },
  headline: {
    fontFamily: 'Red Hat Mono',
    fontSize: '1.5vw',
    padding: '2vh 2vw',
  }
}