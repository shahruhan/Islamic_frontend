import React from "react";


const Welcome = () =>{
    return( 
        <>
        	<section className="gold-bck">
		<div className="w-100 position-relative">
			<div className="container animate__animated animate__fadeInUp wow animated" data-wow-delay="0.2s">
				
				<div style={{position: 'absolute', left: "-112px"}}>
					<img src="images/vectorGroup.png" alt=""/>
				</div>
				<div className="tq-sec-title-wrapper d-flex flex-column align-items-center text-center position-relative w-100 mt-5">
					<div className="tq-sec-title d-flex flex-column align-items-center text-center mt-5">
																			<span>WELCOME TO THE RELISION & REASON</span>
																				<h2 className="mb-0" style={{color: "#065F46"}}>In The Name Of Allah <br/> The Beneficent The Merciful</h2>
																				<p>A knowledge hub dedicated to truth, wisdom, and understanding— <br/>preserving authenticity while addressing misconceptions.</p>
																				
																				<h4>اَمَّنْ هُوَ قَانِتٌ اٰنَاۤءَ الَّيْلِ سَاجِدًا وَّقَاۤىِٕمًا يَّحْذَرُ الْاٰخِرَةَ وَيَرْجُوْا رَحْمَةَ رَبِّهٖۗ قُلْ هَلْ <br/> يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِࣖ</h4>
																			<p>Surah Az-Zumar (39:9)</p>
																			</div>
                                                                            {/* <!-- Section Title --> */}
				</div>
                {/* <!-- Section Title Wrapper --> */}
				<div className="tq-about-wrapper position-relative w-100 mb-5">
					<div className="row">
						<div className="col-md-6 col-sm-12 col-lg-7">
							<div className="pe-5">
								<p className="mb-0">We are a knowledge-driven initiative dedicated to preserving the authenticity of religious teachings while addressing misconceptions through logical reasoning, historical evidence, and scholarly discussions. Our goal is to provide reliable, well-researched answers to questions and criticisms, ensuring that knowledge is both accessible and accurate.</p>
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-12 mt-5">
											<h5 style={{color: "#065F46"}}><i className="fa fa-globe me-2"></i>Our Vision</h5>
											<p>We strive to be a trusted knowledge hub that provides well-researched responses to misconceptions. Our goal is to promote intellectual engagement.</p>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12 mt-5">
											<h5 style={{color: "#065F46"}}><i className="fa fa-bullseye me-2"></i> Our Mission</h5>
											<p>We preserve authentic knowledge and promote understanding through verified sources. Our goal is to bridge faith and reason.</p>
										</div>
									</div>
															</div>
                                                            {/* <!-- About Cap --> */}
						</div>
						<div className="col-md-6 col-sm-12 col-lg-5">
							<div className="tq-post-boxes d-flex flex-column w-100">
													<img src="images/OurMission.png" alt="" style={{boxShadow: '-20px 20px 50px 20px #e9e9e9', borderRadius: '9px', zIndex: "1"}}/>
																
													<div style={{position: 'absolute', right: '-140px', bottom: "-42px"}}>
														<img src="images/vectorGroup.png" alt=""/>
													</div>
												</div>
                                                {/* <!-- Post Boxes --> */}
						</div>
					</div>
				</div>
                {/* <!-- About Wrapper --> */}
				
			</div>
		</div>
	</section>
        </>
    )
}

export default Welcome;