import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (

    // BEM convention
    <div className="app">

      {/* Top Header */}
      <Header /> 
      
      <div className="app__main">
        {/* Side Bar */}
        <Sidebar /> 

        {/* Body */}
        <Body />
      </div>

    </div>
  );
}

export default App;
