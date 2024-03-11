import htmlcss from '../assets/languages/html+csss.webp'
import b5 from '../assets/languages/Bootstraprus.jpg'
import js from '../assets/languages/js.jpeg'
import reactjs from '../assets/languages/reactjs.jpeg'



const Cards = () => {
  return (
    <div className=" container-sm ">
      <div className='row g-4'>
        <div className='col-sm-3'>
          <div className="card">
            <img src={htmlcss} className="rounded float-start" alt="HTMLCSS"  />
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card">
            <img src={js} className="rounded float-middle" alt=""  />
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card">
            <img src={b5} className="rounded float-middle" alt=""  />
          </div>
        </div>
        <div className='col-sm-3'>

          <div className="card">
            <img src={reactjs} className="rounded float-start" alt=""  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

