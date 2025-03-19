import React from "react";



const Video = () => {
    return(
        <>
         	<section className="gold-bck tq-pt-100 tq-pb-100">
		<div className="container animate__animated animate__fadeInUp wow animated" data-wow-delay="0.2s">
			<div className="vid-head text-center">
				<h6 className="txt-grn">Bringing Faith to Life Through Visual Stories</h6>
				<h2 className="txt-grn"> Engage with insightful videos that bring teachings, history, and stories to life</h2>
				<p>Explore immersive videos that deepen your understanding of history, wisdom, and spirituality. These narratives make knowledge accessible and engaging.</p>
			</div>
			<div className="row vid-card">
				<div className="col-lg-4 col-md-4 col-sm-12">
					<div className="card">
						<div className="tq-service-box d-flex flex-column align-items-start w-100">
							<img decoding="async" className="img-fluid" src="images/videoImage.png" alt=""/>
							<div className="p-3">
								<h4 className="mb-2" style={{color: '#065F46', fontWeight: "bold"}}><a href="index.html">Mosque Development</a></h4>
							<p className="mb-2" style={{textAlign: "left"}}>Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.</p>
							<div className="tq-about-cap d-flex flex-column align-items-start w-100 mb-2" style={{zIndex: '1',position: "relative"}}>
								<a  className="tq-theme-btn bg-white rounded-pill" href="index.html" style={{width: "fit-content"}}>Watch Video</a>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12">
					<div className="card">
						<div className="tq-service-box d-flex flex-column align-items-start w-100">
							<img decoding="async" className="img-fluid" src="images/videoImage.png" alt=""/>
							<div className="p-3">
								<h4 className="mb-2" style={{color: '#065F46', fontWeight: "bold"}}><a href="index.html">Charity And Donation</a></h4>
							<p className="mb-2" style={{textAlign: "left"}}>Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.</p>
							<div className="tq-about-cap d-flex flex-column align-items-start w-100 mb-2" style={{zIndex: '1',position: "relative"}}>
								<a  className="tq-theme-btn bg-white rounded-pill" href="index.html" style={{width: "fit-content"}}>Watch Video</a>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12">
					<div className="card">
						<div className="tq-service-box d-flex flex-column align-items-start w-100">
							<img decoding="async" className="img-fluid" src="images/videoImage.png" alt=""/>
							<div className="p-3">
								<h4 className="mb-2" style={{color: '#065F46', fontWeight: "bold"}}><a href="index.html">Mosque Development</a></h4>
							<p className="mb-2" style={{textAlign: "left"}}>Lorem ipsum, dolor sit amet sectetur adipisicing elit. Vel dicta beatae del voluptas apelas de.</p>
							<div className="tq-about-cap d-flex flex-column align-items-start w-100 mb-2" style={{zIndex: '1',position: "relative"}}>
								<a  className="tq-theme-btn bg-white rounded-pill" href="index.html" style={{width: "fit-content"}}>Watch Video</a>
							</div>
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

export default Video; 