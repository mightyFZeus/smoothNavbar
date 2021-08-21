import "./styles.css";
import {useState} from 'react'



export default function App() {
  const [closed, setClosed] = useState(true)

  const toggleMenu =() =>{
    // this.setState({ closed: !this.state.closed });
    setClosed(prevClose => !prevClose)
  }
  return (
    <div className="App">
      <div id='header'>
        <div className="header_wrapper">
          <div className="logo_container">
            <p>Bisi</p>
          </div>

          <div className="menu_btn_wrapper">
            <button className={closed? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
              <div className="menu_btn_line"></div>
              <div className="menu_btn_line"></div>
            </button>
          </div>
        </div>

        { 
          !closed ? (
            <nav>
              <div className="mobile_menu_container">
                <ul>
                  <li  >  Home </li>
                  <li >  Work </li>
                  <li >  Résumé </li>
                  <li >  Contact </li>
                </ul>

                <div className="social_box">
                <h3>Connect With Me</h3>
                  <div className="social_icons">
                    <a href="https://github.com/mightyFzeus"><i className='fab fa-github'></i></a> 
                    <a href="https://twitter.com/mightyzeus9"><i className='fab fa-twitter'></i></a>
//                     <a href="https://www.linkedin.com/in/collins-enebeli-online/"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </nav>
          ) : ''
        }
      </div>
   
    </div>
  );
}
