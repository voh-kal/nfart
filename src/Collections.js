import React from 'react'
import nft1 from '../src/nft1.jpg'
import nft2 from '../src/nft2.jpg'
import nft3 from '../src/nft3.jpg'
import nft4 from '../src/nft4.jpg'
import Navs from './Navs'
import SingleCollection from './SingleCollection';


const Collections = ({collection_image, collection_text}) => {
    return (
        <div>
            <div style={{ backgroundColor: "#ebedf6" }}>
                <Navs color = {'#007bff'}/>
                <div className="container" style={{ color: "black", paddingBottom: "25%", paddingTop: "6%" }}>
                    <div className="text-center animated fadeIn">
                        <h3 className="market-place" >Grow Your Digital Art Collection</h3>
                        <div className="col-md-8 m-auto">
                            <p className="move-header">Take a look at our growing collection of NFTs or digital artwork by most popular and trending artists and creators from across the globe</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ height: "50vh" }}>
                <div className="row text-black row_position fadeInUp animated">
                   <SingleCollection collection_image = {nft1} collection_text="Dreams In Mocha And Latte" id={1}/>
                   <SingleCollection collection_image = {nft2} collection_text="Clasic ModAbstract Hues & Shades" />
                   <SingleCollection collection_image = {nft3} collection_text="Self-Portrait: Inner Conflict" />
                   <SingleCollection collection_image = {nft4} collection_text="Abstract Field Of Sunflowers" />
                   <SingleCollection collection_image = {nft1} collection_text="Dreams In Mocha And Latte" />
                   <SingleCollection collection_image = {nft2} collection_text="Clasic ModAbstract Hues & Shades" />
                   <SingleCollection collection_image = {nft3} collection_text="Self-Portrait: Inner Conflict" />
                   <SingleCollection collection_image = {nft4} collection_text="Abstract Field Of Sunflowers" />
           
                  
                    {/* <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft2} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}></h4>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft3} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}></h4>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft4} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}></h4>
                            </div>
                        </div>

                    </div>
                   
 */}


                </div>

            </div>
        </div>
    )
}

export default Collections
