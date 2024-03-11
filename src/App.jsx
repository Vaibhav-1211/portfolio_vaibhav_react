// import Footer from "./components/footer"
// import { Outlet } from "react-router-dom"
import Cards from "./components/cards"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
// import Header from "./components/header"
import HeroSection from "./components/hero"
import PDFDownloader from "./pages/Page2"
// import Page2 from "./pages/Page2"
// import Page3 from "./pages/Page3"
import Project from "./pages/project"



const App = () => {
  // const page = {
  //   theme: {
  //     padding: "250px 20px"
  //   }
  // };
  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand ms-xl-5 fw-bold" href="#scrollspyHeading1">Vaibhav Kabira</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>


          <div className="collapse navbar-collapse me-sm-5 justify-content-end " id="collapsibleNavbar">
            <ul className="navbar-nav p-0">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">Programming languages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading5">Certificates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
        <center className="bg-light" id="scrollspyHeading1" style={{ padding: "220px 30px" }}><HeroSection /></center>
        <div className="bg-dark" id="scrollspyHeading2" style={{ padding: "200px 30px" }}><p className="display-1 text-center text-light">Profile<hr className="container-sm mt-3 p-5" /></p><PDFDownloader/></div>
        <div className="bg-light" id="scrollspyHeading3" style={{ padding: "200px 30px" }}><p className="display-1 text-center text-dark">Projects<hr className="container-sm mt-3 p-5" /></p><Project /></div>
        <div className="bg-dark" id="scrollspyHeading4" style={{ padding: "200px 30px" }}><p className="display-5 text-center text-light">Programming languages,frameworks & libraries<hr className="container-sm mt-3 p-5" /></p><Cards />
        </div>
        <div className="bg-light" id="scrollspyHeading5" style={{ padding: "200px 30px" }}><p className="display-5 text-center text-dark">Certificates<hr className="container-sm mt-3 p-5" /></p><Gallery />
        </div>
        <div className="" style={{ padding: "10px" }}><Footer /></div>
      </div>
    </>
  )
}

export default App
