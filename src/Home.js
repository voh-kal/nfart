import React from 'react'
import { Image, Container, Row, Button } from 'react-bootstrap';
import move1 from '../src/move1.png'
import move2 from '../src/move2.png'
import move3 from '../src/move3.png'
import nft1 from '../src/nft1.jpg'
import nft2 from '../src/nft2.jpg'
import nft3 from '../src/nft3.jpg'
import nft4 from '../src/nft4.jpg'
import Navs from './Navs';
import { Link } from "react-router-dom";
<style>
  
</style>

const Home = () => {
    return (
        <div className="text-white">

            <header className="bg-image">
                <Navs color = {'#fff'}/>
                <Container className="hero-margin">
                    <div className="col-lg-7">
                        <p className="text-left text-success hero-para2">LARGEST DIGITAL MARKETPLACE</p>
                        <h3 className="hero-header">Explore Thousands Of Digital Art And Collectibles.</h3>
                        <p className="hero-para">Buy and sell NFTs and browse our massive collection of digital art and collectibles by top artists from around the world.</p>
                        <Button variant="success" className="hero-button">Sell Digital Art</Button>
                    </div>

                </Container>
            </header>
            <Container>
                <Row>
                    <div className="col-lg-7">
                        <div className="move-bg-image">

                            <Image src={move1} className="move1 fadeInDown animated" />
                            <Image src={move2} className="move2 fadeInLeft animated" />
                            <Image src={move3} className="move3 fadeInUp animated" />
                        </div>
                    </div>

                    <div className="col-lg-5 animated fadeInRight mv-hd">
                        <h3 className="market-place">The Largest NFT MarketPlace</h3>
                        <p className="move-header">Welcome to the biggest NFT marketplace in the digital arts industry. Here you can find rare collectibles for all kinds of artwork made by talented.</p>
                        <p className="move-header">Creators from all across the globe. Whether you are interested in digital art, photography or unique mixed media, you can find it here.</p>
                        <Button variant="success" className="hero-button">Learn More</Button>
                    </div>
                </Row>

            </Container>
            <Container className="text-center industry-padd">
                <div className="col-md-8 m-auto animated fadeIn">
                    <h3 className="market-place">Every Industry Can Benefit From NFT</h3>
                    <p className="move-header">For traders and creators Our ready-made NFT platform is the place where art becomes unique. It brings together collectors and creators, allowing them</p>

                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="card-padd mt-5 mb-4 animated fadeInLeft" >
                            <h3>Artwork</h3>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card-padd mt-5 mb-4 animated fadeInLeft" >
                            <h3>Photography</h3>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card-padd mt-5 mb-4 animated fadeInRight">
                            <h3>Mixed Media Art</h3>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card-padd mt-5 mb-4 animated fadeInRight">
                            <h3>Auditory Art</h3>
                        </div>

                    </div>
                </div>

            </Container>

            <div style={{ backgroundColor: "#ebedf6" }}>
                <div className="container" style={{ color: "black", paddingBottom: "25%", paddingTop: "6%" }}>
                    <div className="text-center animated fadeIn">
                        <h3 className="market-place" >Grow Your Digital Art Collection Today</h3>
                        <div className="col-md-8 m-auto">
                            <p className="move-header">Take a look at our growing collection of NFTs or digital artwork by most popular and trending artists and creators from across the globe</p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="container" style={{ height: "50vh" }}>
                <div className="row text-black row_position fadeInUp animated">
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft1} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }} >
                                <h4 style={{ fontSize: "15px" }}>Dreams In Mocha And Latte</h4>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft2} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}>Clasic ModAbstract Hues & Shades</h4>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft3} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}>Self-Portrait: Inner Conflict</h4>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="card card-new" >
                            <Image src={nft4} className="card_new" />
                            <div className="mt-5 mb-4" style={{ padding: "10px" }}>
                                <h4 style={{ fontSize: "15px" }}>Abstract Field Of Sunflowers</h4>
                            </div>
                        </div>

                    </div>
                    <Button variant="success" className="hero-button col-2"><Link to="/collections" style={{ color: "#fff", textDecoration: "none" }}>View More</Link></Button>



                </div>

            </div>
            <div>
                <div className="row">
                    <div className="col-md-6 caro-bg-image">

                    </div>
                    <div className="col-md-6 happy-user">
                        <h3 className="market-place">Hear From Our Happy Users</h3>
                        <p className="move-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel etiam mi mauris Egestas in velit augue posuere ornare.</p>


                    </div>
                </div>

                <div className="caro-conatiner">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row p-3">
                                    <div class="col-md-6">
                                        <div className="caro-card-container rounded">
                                            <h3 className="caro-card-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel etiam mi mauris Egestas in velit augue posuere ornare.  </h3>
                                            <div className="caro-margin-top">
                                                <p className="m-0 caro-size-creator">Lanre</p>
                                                <p> <i>Digital Creator</i></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div className="caro-card-container rounded">
                                            <h3 className="caro-card-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel etiam mi mauris Egestas in velit augue posuere ornare.  </h3>
                                            <div className="caro-margin-top">
                                                <p className="m-0 caro-size-creator">Lanre</p>
                                                <p> <i>Digital Creator</i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-3">

                                        <Image src={nft3} alt="" style={{ maxWidth: "100%" }} />

                                    </div>
                                    <div class="col-md-3">

                                        <Image src={nft3} alt="" style={{ maxWidth: "100%" }} />

                                    </div>
                                    <div class="col-md-3">

                                        <Image src={nft3} alt="" style={{ maxWidth: "100%" }} />

                                    </div>
                                    <div class="col-md-3">

                                        <Image src={nft3} alt="" style={{ maxWidth: "100%" }} />

                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
