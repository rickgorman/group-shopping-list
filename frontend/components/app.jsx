import React from 'react';
import BasketContainer from './basket_container.jsx'
import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return(
      <div className='app-wrapper'>
        <BasketContainer basketId={1} />
        <Footer />
      </div>
    );
  }
}

export default App;
