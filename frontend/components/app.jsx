import React from 'react';
import BasketContainer from './basket_container.jsx'

class App extends React.Component {
  render() {
    return(
      <main>
        <BasketContainer basketId={1} />
        <p></p>
      </main>
    );
  }
}

export default App;
