import { useState } from "react";

import { RenderSwitch } from "../Atoms/Navigation/RenderSwitch";

export default function () {

  let [submenuStatus, setSubmenuStatus] = useState(false)
  let [submenuContent, setSubmenuContent] = useState()

  let handleClick = (content) => {
    setSubmenuStatus(true)
    setSubmenuContent(content)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div>
  <a className="navbar-brand" href="#">Navbar</a> 
        </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li onMouseEnter={()=>setSubmenuStatus(false)} className="nav-item active">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li onMouseEnter={()=>handleClick('style')} className="nav-item">
        <a className="nav-link" href="#">Productos</a>
      </li>
      <li onMouseEnter={()=>handleClick('type')} className="nav-item">
        <a className="nav-link" href="#">Estílos</a>
      </li>
      <li onMouseEnter={()=>setSubmenuStatus(false)} className="nav-item">
        <a className="nav-link" href="#">Distribuidores</a>
      </li>
    </ul>
  </div>
      </nav>
{submenuStatus ? (<div className="container-fluid">
          <div onMouseLeave={()=>setSubmenuStatus(false)}  className="row m-0">
          <RenderSwitch
            activeNav={submenuContent}
          />
          </div>
        </div>) : null}
      </>
  );
}