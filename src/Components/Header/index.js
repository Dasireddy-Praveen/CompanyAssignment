import {GiHamburgerMenu} from 'react-icons/gi'

import {FiSearch} from 'react-icons/fi'
import {FaRegHeart, FaRegUser} from 'react-icons/fa'
import {BsHandbag} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-maincontainer">
    <div className="header-subcontainer">
      <div className="logo-hamber-icons-container">
        <GiHamburgerMenu className="hamderger-icon" />
        <img
          alt="logo"
          className="logo-image"
          src="https://res.cloudinary.com/dn6nfhise/image/upload/v1737629360/Logo_1_a0bgrr.png"
        />
      </div>
      <h1 className="Logo-heading">LOGO</h1>
      <div className="icons-container">
        <FiSearch className="search-icon" />
        <FaRegHeart className="heart-icon" />
        <BsHandbag className="bag-icon" />
        <FaRegUser className="profile-icon" />
        <select className="select-langauge">
          <option className="options">ENG</option>
        </select>
      </div>
    </div>
    <ul className="list-container">
      <li className="list-item">SHOP</li>
      <li className="list-item">SKILLS</li>
      <li className="list-item">STORIES</li>
      <li className="list-item">ABOUT</li>
      <li className="list-item">CONTACT US</li>
    </ul>
  </div>
)

export default Header
