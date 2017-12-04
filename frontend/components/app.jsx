import React from 'react';
import BasketContainer from './basket_container.jsx'

class App extends React.Component {
  render() {
    return(
      <div className='app-wrapper'>
        <BasketContainer basketId={1} />
      </div>
    );
  }
}

export default App;
