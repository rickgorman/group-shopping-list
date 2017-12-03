import React from 'react';
import Basket from './basket.jsx'

class App extends React.Component {
  render() {
    return(
      <main>
        <Basket basketId={1} />
        <p></p>
      </main>
    );
  }
}

export default App;
