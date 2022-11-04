import React from 'react';
import { API_URL } from "../../constants";
import shakeLogo from "../images/shake.svg";
import { useState } from 'react';

import './shake.css';
import Login from '../login/login';

const token=JSON.parse(localStorage.getItem('token'));
console.log(token);

const random = () => fetch(`${API_URL}/main/random`, { mode: 'cors', method: 'GET',  headers: {
    'Authorization': `${token.tokenType} ${token.accessToken}`}}).then(r => r.json());


const winner = () => fetch(`${API_URL}/main/winner`, {method: 'GET',  headers: {'Authorization': `${token.tokenType} ${token.accessToken}`}}).then(r => r.json());

const hiddenNumber = (number) => number.slice(0, number.length - 2) + '**';



 const Shake = () => {
   
    const [displayNumber, setDisplayNumber] = useState(null);

  const rotate = () => {
   
    random().then(_random => {
        winner().then(_winner => {
            setTimeout(() => {
                let index = 0;
                const numberSpining = setInterval(() => {
                    console.log(`# ${index}, number: ${_random[index]} `);
                    setDisplayNumber(hiddenNumber(_random[index]));
                    index ++ ;
                }, 500);

                const winnerTimer = setTimeout(() => {
                    clearInterval(numberSpining);
                    clearTimeout(winnerTimer);
                    setDisplayNumber(hiddenNumber(`${_winner}`));
                 
                    
                }, 10000);

            }, 1000);
            
        })
    })
    setDisplayNumber('');
  }



  
    return (
        <div style={{ overflow: 'hidden', height: '100vh' }}>
            <div className="volksWagen">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                      crossOrigin="anonymous" />
                <div>
                    <a href='#'>
                        <img alt='logo' src={shakeLogo} height="80" width="242" className='logo-shake'/>
                    </a>
                    <p className="content_count">Կուտակված կտրոններ՝</p>
                    <p className="content_countNumber">89456284</p>
                    <div className='content_countNumber'>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                        <div className='div4'></div>
                        <div className='div5'></div>
                        <div className='div6'></div>
                        <div className='div7'></div>
                        <div className='div8'></div>

                        <div className='number'>{displayNumber}</div>
                    </div>
                    <p>
                    </p>
                </div>
            </div>
            <div className='movable-container'>
                <div className={`slide-box box1`}>
                    <button onClick={rotate} className ='btn-next-1'>
                        <span className='next-text'>Սկսել խաղարկությունը</span>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Shake;
