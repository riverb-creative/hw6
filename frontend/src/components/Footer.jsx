import './Footer.css'
import { useStore } from "../contexts/StoreContext"

const Footer = () => {
  const { storeName } = useStore();
    return (
      <footer>
        <br />
          <p>&copy; Copyright 2026, all rights reserved.</p>
          <p>{ storeName }</p>
          <p>this is definitely a legitimate footer</p>
      </footer>
    )
}

export default Footer;