// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './btn.css';
import Mobiles from './Components/Mobiles';
import Beauty from './Components/Beauty';
import Electronics from './Components/Electronics';
import Fashion from './Components/Fashion';
import Furniture from './Components/Furniture';
import Tvs from './Components/Tvs';


function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <a class="navbar-brand" href="/">
      <img src="https://www.logolynx.com/images/logolynx/ee/eeebd6f03cea172ad149f2095d575de0.png" alt="Logo" width="150" height="50" class="d-inline-block align-text-top"/>    </a>

    <a className='navbar-brand' href='/'>Welcome to Online Shopping</a>
    

    <div class="position-absolute top-50 start-50 translate-middle">
    <form className="d-flex" role="search">
    <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
      <li></li><a className="navbar-brand" href="/">  sign in</a>
      <a className="navbar-brand" href="/">Sign Up</a>
      <a className="navbar-brand" href="/">cart</a>
      
    </form>
    </div>


      
  </div>
</nav>



{/* <div>
  
<ul class="nav nav-tabs" >
  

  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Mobiles & Tablets</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Electronics</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Tvs & Appliances</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Beauty</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Fashion</a>
  </li> */}
  {/* <li class="nav-item">
    <a class="nav-link " href='/'></a>
  </li> */}
{/* </ul>

</div> */}








<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <button class="btn " type='button'><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Mobiles & Tablets</p></button>
    <button class="btn " type="button"><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Electronics</p></button>
    <button class="btn " type="button"><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7a9da987f315df35.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Tvs & Appliances</p></button>
    <button class="btn " type="button"><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e83a5f27b01d9a7e.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Beauty</p></button>
    <button class="btn " type="button"><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Fashion</p></button>
    <button class="btn " type="button"><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4e0bdf8567ecb960.png?q=100" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/><p>Furniture</p></button>

  </form>
</nav>






<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 " src="https://th.bing.com/th/id/OIP.CehKxppHXhynUxTRvqrz4gHaF3?pid=ImgDet&rs=1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://th.bing.com/th/id/OIP.r6FAZewL_GvlVnrFIwG-rAHaED?pid=ImgDet&rs=1" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://th.bing.com/th/id/OIP.AVW9gh3lp4LAKBVvYKIiCgHaEj?pid=ImgDet&rs=1" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>












     
    </div>
  );
}

export default App;
