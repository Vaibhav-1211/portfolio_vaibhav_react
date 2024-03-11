// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  // const element = <FontAwesomeIcon icon="fa-brands fa-linkedin" />

  return (


      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
        <p className="col-md-4 mb-0 text-dark">Vaibhav Kabira</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        </a>

        <ul className="nav col-md-4 justify-content-end ">
          <li className="nav-item "><a href="#scrollspyHeading1" className="nav-link px-2 text-dark">Go Top</a></li>
          <li className="nav-item "><a href="https://www.linkedin.com/in/vaibhav-kabira-7a62a018a/" className="nav-link px-2 text-dark">LinkedIn</a></li>

        </ul>
        
      </footer>
  )
}

export default Footer