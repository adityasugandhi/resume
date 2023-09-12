import React,{useState} from "react";
import "../Styles/style.scss"


export default function Education (props){
    const [showMore, setShowMore]= useState(false);
    const toggleShowMore = () =>{
        setShowMore(!showMore);
    }
    const {university,degree,timeline} = props;
    return (
        <div className={`container template ${showMore ? 'expanded' : ''}`} onClick={toggleShowMore}>
            <div className="row">
                <div className="col-md-8 title">{university}</div>
                <div className="col-md-4 timeline">{timeline}</div>
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
    
        
            
       
    );
}
