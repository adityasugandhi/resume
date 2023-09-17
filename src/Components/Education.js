import React,{useState} from "react";
import "../assets/css/Styles/style.scss"
import { Containerfadein } from "../assets/css/Styles/fadein";


export default function Education (props){



    const [showMore, setShowMore]= useState(false);
    const toggleShowMore = () =>{
        setShowMore(!showMore);
    }
    const {university,degree,timeline,logo,link} = props;
    return (
        <Containerfadein>
        <div className={`container education ${showMore ? 'expanded' : ''}`} onClick={toggleShowMore}>
            <div className="row">
                <div className="col-1"> {/* This col-1 is for the logo */}
                    {logo && <img src={logo} alt="" className="university-logo" />}
                </div>
                <div className="col-7 title">
                    <a href={link} className="links">
                        {university}
                    </a>
                </div>
            <div className="col-4 timeline">{timeline}</div>
            </div>
            <div className="row">
                <div className="col-12 description">{degree}</div>
            </div>
            {showMore && (
                <div className="row">
                    <div className="col-12">
                        <ul>
                            {props.items && props.items.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> 
                    </div>
                </div>
            )}
        </div>
    </Containerfadein>
        
            
       
    );
}
