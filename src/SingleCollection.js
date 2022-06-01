import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SingleCollection = (props) => {
    return (

        <div className="col-md-3 mt-5 mb-5">
            <div className="card card-new" >
                <Link to="/viewcollection/props.id/details">
                    <Image src={props.collection_image} className="card_new" style={{width:"100%"}}/>
                    <div className="mt-5 mb-4" style={{ padding: "10px" }} >
                        <h4 style={{ fontSize: "15px" }}>{props.collection_text}</h4>
                    </div>
                </Link>

            </div>
        </div>





    )
}

export default SingleCollection
