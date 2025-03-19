import React from "react";
import CountUp from 'react-countup';

const HomeBanner = () => {

    


    return(
        <>


		<section>
            <div className="w-100 tq-pt-190 tq-secondary-layer tq-opc97 position-relative" style={{borderBottom: '10px solid #db9e30'}}>
                <div className="tq-fixed-bg tq-bg-secondary"
                    style={{backgroundImage: "url(images/tq-feat-bg.jpg)"}}></div>
                <div className="container">
                    <div className="tq-feat-wrapper position-relative w-100 pb-5">
                        <div className="tq-feat-caro swiper w-100">
                            <div className="swiper-wrapper">
                                
									                              
																
									<div className="tq-feat-item swiper-slide position-relative w-100">
										<div className="row">
											<div className="col-md-6 col-sm-12 col-lg-5 order-md-1">
												<div className="tq-feat-img position-relative w-100">
													<img decoding="async" className="img-fluid" src="images/tq-feat-img2.png"
														alt="Slider Image" loading="lazy"/>
												</div> 
											</div>
											<div className="col-md-6 col-sm-12 col-lg-7">
												<div
													className="tq-feat-cap d-flex flex-column position-relative w-100">
													<h2 className="mb-0"><span style={{color: "#ffb634"}}>Religion & Reason</span> Where Faith Meets Understanding</h2>
													<p>Islam faces criticism due to misconceptions. This section explores common criticisms and provides scholarly responses, using logic, history and teachings to promote understanding.</p>
													<div className="d-flex mt-5">
														<a className="btn-bnr" href="index.html">Discover Library</a>
													<a className="btn-bnr2" href="index.html">Learn More</a>
													</div>
													<div className="row mt-5 mb-5">
														<div className="col-lg-4 col-md-4 col-sm-12 count">
															<h3><CountUp className="number" delay={3} enableScrollSpy={true} scrollSpyDelay={1} duration={5} end={10542}/> +</h3>
															<p>Resources Varified</p>
														</div>
														<div className="col-lg-4 col-md-4 col-sm-12 count count1">
															<h3><CountUp className="number" delay={3} enableScrollSpy={true} scrollSpyDelay={1} duration={5} end={25000}/> +</h3>
															<p>Key Topic Discssions</p>
														</div>
														<div className="col-lg-4 col-md-4 col-sm-12 count count1">
															<h3><CountUp className="number" delay={3} enableScrollSpy={true} scrollSpyDelay={1} duration={5} end={150}/> +</h3>
															<p>Scholars and Researchers</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
                                
								 </div>
                        </div>
                        <div className="tq-feat-pagination"></div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}


export default HomeBanner; 


