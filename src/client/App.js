import React, { Component } from 'react';
import './app.css';
import FileUpload from './fileupload';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>F04 Piano Transcription</h1>
        {/* {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>} */}
        <body>
          <FileUpload />
        </body>
      </div>
    );
  }
}
