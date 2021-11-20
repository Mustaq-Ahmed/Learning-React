import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <div className="container my-3">
        <TextForm heading = "Enter Text to Analyze"/>
      </div>
    </>
  );
}

export default App;
