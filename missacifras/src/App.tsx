import Menu from "./components/generic/Menu";
import logo from "./assets/logo/logo(305x91).png";
import userLogo from "./assets/generic/userLogo.png";
import searchLogo from "./assets/generic/lupa.png";

export default function App() {
  return <Menu logo={logo} userLogo={userLogo} searchLogo={searchLogo}></Menu>;
}
