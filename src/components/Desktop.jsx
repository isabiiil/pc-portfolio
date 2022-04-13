import React, { Component } from 'react';
import { root, news, work, extras, proj } from './../data/Sidebar';
import Content from './Content';

export default class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: 'root',
      content: null,
    };
    this.changeSidebar = this.changeSidebar.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  changeSidebar = (link) => {
    this.setState({
      sidebar: link
    })
  }

  changeContent = (content) => {
    this.setState({
      content: content
    })
  }

  render() {
    switch(this.state.sidebar) {
      case 'root':
        return (
          <>
            <div style={styles.container} className="sidebar">
              {root.map(f => {
                return (
                  <div key={f.id} style={styles.icon} onClick={() => {this.changeSidebar(f.link)}}>
                    <img src={f.icon} style={styles.image} />
                    <p>{f.title}</p>
                  </div>
                )
              })}
            </div>
            <Content show={this.state.content} />
          </>
        )
      case 'news':
        return (
          <>
            <div style={styles.container} className="sidebar">
              {news.map(f => {
                return (
                  <div key={f.id} style={styles.icon} onClick={() => {this.changeSidebar(f.link); this.changeContent(f.content)}}>
                    <img src={f.icon} style={styles.image} />
                    <p>{f.title}</p>
                  </div>
                )
              })}
            </div>
            <Content show={this.state.content} />
          </>
        )
      case 'work':
        return (
          <>
            <div style={styles.container} className="sidebar">
              {work.map(f => {
                return (
                  <div key={f.id} style={styles.icon} onClick={() => {this.changeSidebar(f.link); this.changeContent(f.content)}}>
                    <img src={f.icon} style={styles.image} />
                    <p>{f.title}</p>
                    <p style={{fontStyle: 'italic'}}>{f.company}</p>
                  </div>
                )
              })}
            </div>
            <Content show={this.state.content} />
          </>
        )
      case 'extras':
        return (
          <>
            <div style={styles.container} className="sidebar">
              {extras.map(f => {
                return (
                  <div key={f.id} style={styles.icon} onClick={() => {this.changeSidebar(f.link); this.changeContent(f.content)}}>
                    <img src={f.icon} style={styles.image} />
                    <p>{f.title}</p>
                    <p style={{fontStyle: 'italic'}}>{f.company}</p>
                  </div>
                )
              })}
            </div>
            <Content show={this.state.content} />
          </>
        )
      case 'proj':
        return (
          <>
            <div style={styles.container} className="sidebar">
              {proj.map(f => {
                return (
                  <div key={f.id} style={styles.icon} onClick={() => {this.changeSidebar(f.link); this.changeContent(f.content)}}>
                    <img src={f.icon} style={styles.image} />
                    <p>{f.title}</p>
                  </div>
                )
              })}
            </div>
            <Content show={this.state.content} />
          </>
        )
    }
    
  }
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

// make it one big class component
// make the component that was meant to be in Content.jsx to be a state
// https://stackoverflow.com/questions/33840150/onclick-doesnt-render-new-react-component
// pass the label into the content
// complete Sidebar.js with all the details then map details instead of manually copying and pasting
// make functions for each snippet (each folder screen, each job desc, project desc, etc) 
