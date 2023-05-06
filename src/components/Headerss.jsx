import { useState } from "react";

function Headerss() {
  const [Btn, setBtn] = useState(false);

  const cambio = () => {
    setBtn(!Btn);
  };

  return (
    <div className="header">
      <div className="header__icon ">
        <i class="fa-brands fa-instagram "></i>
        <i class="fa-brands fa-facebook "></i>
      </div>

      
      <div className="header__menu ">
        <button onClick={cambio}>
          <i class="fa-solid fa-bars "></i>
        </button>
      </div>
     {
      Btn && <div className={`menu__  ${Btn && " translate-y-[119px]"}`} >
      <div className="header ">

    <div className="header__icon">
      <i class="fa-brands fa-instagram "></i>
      <i class="fa-brands fa-facebook "></i>
    </div>

    <div>
      <button onClick={cambio}>
      <i class="fa-regular fa-circle-xmark text-white "></i>
      </button>
    </div>
      </div>
      <div className="menu__datos  ">

      <h3>Home</h3>
      <h3>Services</h3>
      <h3>About</h3>
      <h3>Gallery</h3>
      <h3>Blog</h3>
      <h3>Contact Us</h3>
      </div>
    </div>
     }
      
    </div>
  );
}

export default Headerss;
