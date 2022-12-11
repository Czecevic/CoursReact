import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Bienvenue sur React</h1>
        {/* utilisation du ternaire */}
        {/* {
          if(3 > 2) {
            console.log('vrai')
          } else {
            console.log('faux')
          }
        } */}
        {/* (3 > 2) ? 
          console.log('vrai') : 
      console.log('faux') */}
        {/*
        <div className="sidebar" /> 
        est eéquivalent à ceci :
        React.createElement(
          'div',
          {className: 'sidebar'}
        )
        */}
    </div>
  );
}
export default App;
