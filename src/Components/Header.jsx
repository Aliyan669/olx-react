import React from 'react';
import './Header.css'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SearchIcon from '@mui/icons-material/Search';


function Header(props) {
  return (
    <div className='Main'>
        <div className='u_main'>
        <div className="firstsec">
            <img className='img1' src={props.img} />
           <div className='sec1'>
            <span><DirectionsCarIcon /></span>
            <p>MOTORS</p>
           </div>
           <div className='sec1'>
            <span><CorporateFareIcon/></span>
            <p>PROPERTY</p>
           </div>
           </div>

           <div className="secondsec">
             <img className='img2' src={props.img2} />
             <div className='sec2'>
               
                <div className='search'>
               <SearchIcon />
               </div>
               <div> 
               <input className='inp1' type="text" placeholder='Search city, area or locality' />
               </div>
               </div>
               <div className="sec3">
               <div>
               <input className='inp2' value={props.value} onChange={props.onchange.bind(this)} type="text" placeholder='Find Car, Mobile Phones and more...' />
               </div>
               <div className='search2'>
               <SearchIcon />
               </div>
               </div>
                <h4 className='log '>login</h4>
                <div className='sell' >
                  <img src={props.sell} />
                </div>
           </div>
        </div>


        <div>

        </div>

    </div>
  )
}
export default Header ;
