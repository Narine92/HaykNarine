// import React from 'react';
// import { API_URL } from "../../constants";
// import shakeLogo from "../images/shake.svg";
// import carvolk from "../images/carvolk.png";
// import phone from "../images/iphone.svg";
// import spiner_src from "../images/spinner.svg";
// import { useState } from 'react';

// import './volkswagen.css';
// import Login from '../login/login';

// const token=JSON.parse(localStorage.getItem('user-info'));
// console.log(token);

// const random = () => fetch(`${API_URL}/main/random`, { mode: 'cors', method: 'GET',  headers: {
//     'Authorization': `${token.tokenType} ${token.accessToken}`}}).then(r => r.json());


// const winner = () => fetch(`${API_URL}/main/winner`, {method: 'GET',  headers: {'Authorization': `${token.tokenType} ${token.accessToken}`}}).then(r => r.json());

// const hiddenNumber = (number) => number.slice(0, number.length - 3) + '***';

// const products = [carvolk, phone];

//  const VolksWagen = () => {
//     const [product, setProduct] = useState(products[0]);


//     const [spinerClass, setSpinerClass] = useState('');
//     const [productClass, setProductClass] = useState('');
//     const [restartClass, setRestartClass] = useState('');
//     const [lastPageClass, setLastPageClass] = useState('');
//     const [displayNumber, setDisplayNumber] = useState(null);

//   const rotate = () => {
//     setSpinerClass('up');
//     setProductClass('down');
//     setRestartClass('down');
//     setLastPageClass('down');
//     random().then(_random => {
//         winner().then(_winner => {
//             setTimeout(() => {
//                 let index = 0;
//                 setSpinerClass('up spin');
//                 const numberSpining = setInterval(() => {
//                     console.log(`# ${index}, number: ${_random[index]} `);
//                     setDisplayNumber(hiddenNumber(_random[index]));
//                     index ++ ;
//                 }, 500);

//                 const winnerTimer = setTimeout(() => {
//                     clearInterval(numberSpining);
//                     clearTimeout(winnerTimer);
//                     setDisplayNumber(hiddenNumber(`${_winner}`));
//                     setSpinerClass('down');
//                     setRestartClass('up-restart');
                    
//                 }, 10000);

//             }, 1000);
            
//         })
//     })
//     setDisplayNumber('');
//   }

//   const newGame = () => {
//     setProduct(products.pop());
//     setProductClass('up-iphone');
//     setRestartClass('down');
//     setDisplayNumber('');
//   }


  
//     return (
//         <div style={{ overflow: 'hidden', height: '100vh' }}>
//             <div className="volksWagen">
//                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
//                       integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
//                       crossOrigin="anonymous" />
//                 <div>
//                     <a href='#'>
//                         <img alt='logo' src={shakeLogo} height="80" width="242" className='logo-shake'/>
//                     </a>
//                     <p className="volks-text">Volkswagen ID.4 խաղարկություն</p>
//                     <p className="content_count">Կուտակված կտրոններ՝</p>
//                     <p className="content_countNumber">89456284</p>
//                     <div className='content_countNumber'>
//                         <div className='number'>{displayNumber}</div>
//                     </div>
//                     <p>
//                     </p>
//                 </div>
//             </div>
//             <div className='movable-container'>
//                 <div className={`slide-box box1 ${productClass}`}>
//                     <img alt='' src = {product} />
//                     <button onClick={rotate} className ='btn-next-1'>
//                         <span className='next-text'>Սկսել խաղարկությունը</span>
//                     </button>
//                 </div>
//                 <div className={`slide-box box2 ${spinerClass}`}>
//                     <img alt='' className src = {spiner_src} />
//                 </div>
//                 {/* </div> */}
//                 <div className={`slide-box box3 ${restartClass}`}>
//                 <div className="buttons">
//                   <button onClick={rotate} className ='btn-next'>
//                     Նորից Խաղարկել
//                   </button>
//                   {products.length > 1 ? <button onClick={newGame} className='btn-next1' href="#">
//                       Խաղարկել հաջորդ նվերը
//                   </button> : null}
//                 </div>
//                 </div>
//                 <div className={`slide-box box4 ${lastPageClass}`}>
//                     <button onClick={rotate} className='btn-next'>
//                         Նորից Խաղարկել
//                     </button>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// export default VolksWagen;
