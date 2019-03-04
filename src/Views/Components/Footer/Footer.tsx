import * as React from 'react'
const styles = require('./Footer.css')
const cardsImage = require('../../../assets/images/cards.png')
const blogThumbImage1 = require('../../../assets/images/blog-thumb1.jpg')
const blogThumbImage2 = require('../../../assets/images/blog-thumb2.jpg')
const logoLight = require('../../../assets/images/logo-light.png')

class Footer extends React.Component {
    render() {
        return(
            <footer className={styles.footerSection}>
					<div className="container">
						<div className={`${styles.footerLogo} text-center`}>
							<a href="index.html">
								<img src={logoLight} alt="" />
							</a>
						</div>
						<div className="row">
							<div className="col-lg-3 col-sm-6">
								<div className={`${styles.footerWidget} ${styles.aboutWidget}`}>
									<h2>About</h2>
									<p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
									<img src={cardsImage} alt="" />
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className={`${styles.footerWidget} ${styles.aboutWidget}`}>
									<h2>Questions</h2>
									<ul>
										<li><a href="">About Us</a></li>
										<li><a href="">Track Orders</a></li>
										<li><a href="">Returns</a></li>
										<li><a href="">Jobs</a></li>
										<li><a href="">Shipping</a></li>
										<li><a href="">Blog</a></li>
									</ul>
									<ul>
										<li><a href="">Partners</a></li>
										<li><a href="">Bloggers</a></li>
										<li><a href="">Support</a></li>
										<li><a href="">Terms of Use</a></li>
										<li><a href="">Press</a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className={`${styles.footerWidget} ${styles.aboutWidget}`}>
									<h2>Questions</h2>
									<div className={styles.fwLatestPostWidget}>
										<div className={styles.lpItem}>
											<img className={`${styles.lpThumb} ${styles.setBg}`} src={blogThumbImage1} />
											<div className={styles.lpContent}>
												<h6>what shoes to wear</h6>
												<span>Oct 21, 2018</span>
												<a href="#" className={styles.readMore}>Read More</a>
											</div>
										</div>
										<div className={styles.lpItem}>
											<img className={`${styles.lpThumb} ${styles.setBg}`} src={blogThumbImage2} />
											<div className={styles.lpContent}>
												<h6>trends this year</h6>
												<span>Oct 21, 2018</span>
												<a href="#" className={styles.readMore}>Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className={`${styles.footerWidget} ${styles.contactWidget}`}>
									<h2>Questions</h2>
									<div className={styles.conInfo}>
										<span>C.</span>
										<p>Your Company Ltd </p>
									</div>
									<div className={styles.conInfo}>
										<span>B.</span>
										<p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
									</div>
									<div className={styles.conInfo}>
										<span>T.</span>
										<p>+53 345 7953 32453</p>
									</div>
									<div className={styles.conInfo}>
										<span>E.</span>
										<p>office@youremail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.socialLinksWarp}>
						<div className="container">
							<div className={styles.socialLinks}>
								<a href="" className={styles.instagram}><i className="fa fa-instagram"></i><span>instagram</span></a>
								<a href="" className={styles.googlePlus}><i className="fa fa-google-plus"></i><span>g+plus</span></a>
								<a href="" className={styles.pinterest}><i className="fa fa-pinterest"></i><span>pinterest</span></a>
								<a href="" className={styles.facebook}><i className="fa fa-facebook"></i><span>facebook</span></a>
								<a href="" className={styles.twitter}><i className="fa fa-twitter"></i><span>twitter</span></a>
								<a href="" className={styles.youtube}><i className="fa fa-youtube"></i><span>youtube</span></a>
								<a href="" className={styles.tumblr}><i className="fa fa-tumblr-square"></i><span>tumblr</span></a>
							</div>
			
						<p className="text-white text-center mt-5">Copyright &copy; 2019 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
						</div>
					</div>
            </footer>
        )
    }
}

export { Footer }
export default Footer