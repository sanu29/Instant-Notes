import { Link } from "react-router-dom";
import "../App.css"
 import heroImg from '../images/note2.png';
export const Index = () =>{
    return <>
           <div className=" d-flex justify-content-center align-items-center flex-wrap w-100">
            <div className="card homepage-main border-radius-md box-shadow-sm flex-wrap">
                <div className="d-flex justify-content-between">
                    <div className="d-flex-cols text-align-center margin-32 flex-wrap">
                        <div className="logo font-color-primary ">Instant Notes</div>
                        <div className="para3 font-weight-bolder  ">Handy Mordern Notes </div>
                        <div className="para3 font-weight-bolder font-color-primary ">Note Taking App </div>
                        <div className="para4 font-weight-bolder details ">
                           Internet had made learning anywhere possible. But Notes??? so mordern problem needs
                           mordern solution. Manage your daily tasks and workflow in a modern way and boost 
                           your efficiency without any efforts
                        </div>
                        <div className="action">
                            <Link to={'/signup'} className="btn btn-primary w-100 font-weight-bolder margin-none join">Join</Link>
                           <div className="margin-top-1">
                           <Link to={'/login'} className="btn  btn-primary-outline w-100 font-weight-bolder bg-white margin-none ">Already Have and Account!!!!</Link>

                               </div> 
                        </div>
                    </div>

                    <div>
                        
                    <img src={heroImg} className="image-responsive hero-image"/>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}