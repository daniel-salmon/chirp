import React from 'react';
import './App.css';

import Feed from './Feed';
import Input from './Input';

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends React.Component {
  state = {
    feed: [
      {
        color: "cornflowerblue",
        username: "slammin",
        isMe: true,
        body: "sup",
      },
      {
        color: "orangered",
        username: "salmon",
        isMe: false,
        body: "not much. you?",
      },
    ]
  }

  onSendChirp = (chirp) => {
    const feed = this.state.feed
    feed.push({
      color: "cornflowerblue",
      username: "slammin",
      isMe: true,
      body: chirp
    })
    this.setState({feed: feed})
  }

  render() {
    return (
      <div className="main-container">
        <Feed
          feed={this.state.feed}
        />
        <Input
          onSendChirp={this.onSendChirp}
        />
      </div>
    );
  }
}

export default App;
