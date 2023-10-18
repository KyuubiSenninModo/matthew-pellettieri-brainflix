import "./header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo--container">
          <img className="header__logo" src={logo} alt="BrainFlix-logo" />
        </div>
        <div className="searchbar--container">
          <img
            className="header__logo--tablet"
            src={logo}
            alt="BrainFlix-logo"
          />
          <input type="text" className="searchbar" placeholder="Search" />
          <button className="upload--button--tablet">UPLOAD</button>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <div className="button--container">
          <button className="upload--button--mobile">UPLOAD</button>
        </div>
      </header>
    </>
  );
}

export default Header;
