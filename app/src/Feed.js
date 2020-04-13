import React from 'react';

function Chirp(props) {
  const backgroundColor = props.isMe ? "cornflowerblue" : "orangered"
  return (
    <li className="chirp">
      <span
        className="avatar"
        style={{backgroundColor: props.color}}
      />
      <div className="chirp-content">
        <div className="username">
          {props.username}
        </div>
        <div className="body" style={{backgroundColor: backgroundColor}}>
          {props.body}
        </div>
      </div>
    </li>
  );
}

class Feed extends React.Component {
  renderChirp(chirp) {
    return (
      <Chirp
        color={chirp.color}
        username={chirp.username}
        isMe={chirp.isMe}
        body={chirp.body}
      />
    )
  }

  render() {
    const feed = this.props.feed;
    return (
      <ul className="feed-list">
        {feed.map(chirp => this.renderChirp(chirp))}
      </ul>
    );
  }
}

export default Feed;
