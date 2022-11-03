import React from 'react';
import { API_URL } from "../../constants";
import shakeLogo from "../images/shake.svg";
// import spiner_src from "../images/spinner.svg";
import { useState } from 'react';
import './admin.css';
import Login from '../login/login';



const token=JSON.parse(localStorage.getItem('user-info2'));
console.log(token);


const winner = () => fetch(`${API_URL}/main/winnerForAdmin`, {method: 'GET', role:["[ROLE_QUALIFIER]"], headers: {'Authorization': `${token.tokenType} ${token.accessToken}`}}).then(r => r.json());




 const Admin = () => {

             // const [spinerClass, setSpinerClass] = useState('');
            const [displayNumber, setDisplayNumber] = useState(null);

 
            // setSpinerClass('up');
        winner().then(_winner => {
            setTimeout(() => {
               const winnerTimer = setTimeout(() => {
                clearTimeout(winnerTimer);
                 setDisplayNumber(`${_winner}`);
                }, 10000);
            }, 5000);
        })
            setDisplayNumber('');
  


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
                        <div className='number'>{displayNumber}</div>
                    </div>
                    <p>
                    </p>
                </div>
            </div>
                {/* <div className={`slide-box box2 ${spinerClass}`}>
                    <img alt='' className src = {spiner_src} />
                </div> */}
            </div>
        )
}

export default Admin;
