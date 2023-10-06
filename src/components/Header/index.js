import './index.css'
import {RiPhoneFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {AiOutlineWhatsApp, AiOutlineMobile} from 'react-icons/ai'

const Header = () => (
  <div className="main-container">
    <div className="header">
      <div className="dialer">
        <RiPhoneFill />
      </div>
      <a href="9540349392" className="aa1">
        +91-9540349392
      </a>
      <div className="dialer">
        <MdEmail />
      </div>
      <a href="contact@schoolaura.com" className="aa">
        contact@schoolaura.com
      </a>
    </div>
    <div className="btn-container">
      <button type="button" className="header-btn whatsapp">
        <AiOutlineWhatsApp className="icons" /> WhatsApp
      </button>
      <button type="button" className="header-btn mobile">
        <AiOutlineMobile className="icons" />
        MobileApp
      </button>
      <button type="button" className="header-btn">
        Login
      </button>
      <button type="button" className="header-btn">
        Registration
      </button>
    </div>
  </div>
)

export default Header
