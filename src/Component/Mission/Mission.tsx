import { SlBadge } from "react-icons/sl";
import { LuFileSearch } from "react-icons/lu";
import { FaStaffSnake } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";


export default function Mission() {
  return (
    <>
      <section id="mission" className="my-5 bg-colored">
        <div className="container text-center text-white">
          <div className="row text-center">
            <h2 className='fw-bolder my-5 display-5 text-center'>Our Mission</h2>

            <h3 className='fs-6 fw-light'>Our mission is to deliver accurate, professional, and dependable translation services that preserve the true meaning of every document.</h3>
            <div className="row my-5 gy-5 justify-content-center justify-content-md-start mx-auto">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card h-100 align-items-center py-3 missionCard">
                  <div className="icon-wrapper bg-colored rounded-circle w-auto">
                    <SlBadge size={55} className="m-3 hero-icon text-white" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bolder fs-4 card-title flex-grow-1">
                      Certified translation for official documents
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card h-100 align-items-center py-3 missionCard" >
                  <div className="icon-wrapper bg-colored rounded-circle w-auto">
                    <LuFileSearch size={55} className="m-3 hero-icon text-white" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bolder fs-4 card-title  flex-grow-1">Specialized academic translation for master’s and PhD research</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card h-100 align-items-center py-3 missionCard" >
                  <div className="icon-wrapper bg-colored rounded-circle w-auto">
                    <FaStaffSnake size={55} className="m-3 hero-icon text-white" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bolder fs-4 card-title  flex-grow-1">
                      Highly precise medical translation based on expert knowledge</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card h-100 align-items-center py-3 missionCard" >
                  <div className="icon-wrapper bg-colored rounded-circle w-auto">
                    <BsBoxSeamFill size={55} className="m-3 hero-icon text-white" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bolder fs-4 card-title  flex-grow-1">
                      Fast delivery with consistent terminology</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
