import Menu from "./components/generic/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "./assets/logo/logo(305x91).png";
import userLogo from "./assets/generic/userLogo.png";

export default function App() {
  return <Menu logo={logo} userLogo={userLogo}></Menu>;
}

{
  /* <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
<script src="./node_modules/bootstrap/dist/js/bootstrap.js" defer></script> */
}
