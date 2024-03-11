import logo from "./logo.svg";
import "./App.css";
import FirstBtn from "./Component/Btn";
import ImageComponent from "./Component/BtnClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstBtn TextInbtn="clickme!" />
        <FirstBtn TextInbtn="clickme!" />
        <FirstBtn TextInbtn="cliccami" class={"green"} />
        <ImageComponent
          src="https://www.sodiwseries.com/photos/team/1/3/0/5/5/4730a1c59370834d1ec502d9f8d105a0.jpg"
          alt="prova2"
        />
        <ImageComponent
          src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T31A1PA29PT10X2Y6D305162025W5599H5502/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/4-mori-stained-tazza.jpg"
          alt="ciao"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
