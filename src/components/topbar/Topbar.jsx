import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Badmus.
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+90 533 851 8068</span>
          </div> */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>badmusadedamola@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LocationOnIcon className="icon" />
            <span>Cyprus</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
