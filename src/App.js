// import logo from './logo.svg';
import './App.css'; 
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/footer';
import ActionAreaCard from "./Components/product";
import {React,useState} from 'react';
import data from './Components/data';


function App() {
  const [filter ,setfilter] = useState();

  const getValue = (event) => {
    setfilter(event.target.value)
  }
  let datasearch = data.carddata.filter(item =>{
     return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });
  return (
    <div className="App">
     <div>
      <Header value={filter} onchange={getValue} img="olx.png" img2="olx221.png" sell="sell.png" />
     </div>
     <div>
      <Navigation />
     </div>
     <div className='banner'>
      <img src='banner.png' />
     </div>
     <div className='ad'>
      <img src='ad.png' />
     </div>
      <div className='recom'>
          <h3>Fresh recommendations</h3>
      </div>
      <div>
            <ActionAreaCard hhhhh="datasearch" />
      </div> 
          <div className='ad2'>
            <img src='ad2.png' />
           </div>
        <div>
          <Footer />
        </div>
        
   
     

    </div>
  );
}

export default App;
