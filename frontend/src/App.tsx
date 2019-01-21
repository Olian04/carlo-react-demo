import * as React from 'react';
import './App.css';
import logo from './logo.svg';

import * as backend from './backend';

class App extends React.Component<{}, { env: { [key: string]: string } }> {
  public async componentWillMount() {
    this.setState({
      env:  await backend.getEnv()
    });
    console.log(this.state.env);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <dl>
          {this.state && this.state.env && Object
            .keys(this.state.env)
            .map((k, i) => 
              <dd key={i}>{k}: {this.state.env[k]}</dd>
            )
          }
        </dl>
      </div>
    );
  }
}

export default App;
