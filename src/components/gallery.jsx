import img1 from "../assets/certificate/img-1.jpg"
import img2 from "../assets/certificate/img-2.jpg"
import img3 from "../assets/certificate/img-3.jpg"
import img4 from "../assets/certificate/img-4.jpg"
import img5 from "../assets/certificate/img-5.jpg"
import img6 from "../assets/certificate/img-6.jpg"
import img7 from "../assets/certificate/img-7.jpg"
import img8 from "../assets/certificate/img-8.jpg"
import img9 from "../assets/certificate/img-9.jpg"
import img10 from "../assets/certificate/img-10.jpg"

const Gallery = () => {
  return (
    <div className="container-sm">
      <div className="row g-4 ">
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img1}   className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img2} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img3} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img4} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img5} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img6} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img7} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img8} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img9} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card border">
            <img src={img10} className="card-img-top h-100 w-auto d-inline-block" alt=""  />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery