import {Outlet, Link } from "react-router-dom";
import logo from './../assets/images/logo.png';
import homeIcon from './../assets/images/home.svg';
import aboutIcon from './../assets/images/about.svg';
import portfolioIcon from './../assets/images/portfolio.svg';
import contactIcon from './../assets/images/contact.svg';



export default function Layout() {
	return (
	  <div>
		{/* A "layout route" is a good place to put markup you want to
			share across all the pages on your site, like navigation. */}
		<header>
		
		<nav className="navbar desktop"> {/* Desktop Nav */}
			<img src={logo} alt="Paolo Imbag Logo"/>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>

		<nav className="navbar mobile">{/* Mobile Nav */}
			<img src={logo} alt="Paolo Imbag Logo"/>
			<ul className="nav-links">
				<li>
					<Link to="/"><img src={homeIcon} alt="Home Icon"/></Link>
				</li>
				<li>
					<Link to="/about"><img src={aboutIcon} alt="Home Icon"/></Link>
				</li>
				<li>
					<Link to="/projects"><img src={portfolioIcon} alt="Home Icon"/></Link>
				</li>
				<li>
					<Link to="/contact"><img src={contactIcon} alt="Home Icon"/></Link>
				</li>
			</ul>
		</nav>


		</header>
  
		{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the child routes we defined above. */}
		<Outlet />

		<hr/>

		<footer>
			<nav className="navbar desktop">
				<img src={logo} alt="Paolo Imbag Logo"/>
				<p>©2023 • Paolo Imbag | INM420 SBB</p>
				<p>Interactive Media Design • Seneca College</p>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<nav className="navbar mobile">
				<img src={logo} alt="Paolo Imbag Logo"/>
				<p>©2023 • Paolo Imbag | INM420 SBB</p>
				<p>Interactive Media Design • Seneca College</p>
				<ul className="nav-links">
					<li>
						<Link to="/"><img src={homeIcon} alt="Home Icon"/></Link>
					</li>
					<li>
						<Link to="/about"><img src={aboutIcon} alt="Home Icon"/></Link>
					</li>
					<li>
						<Link to="/projects"><img src={portfolioIcon} alt="Home Icon"/></Link>
					</li>
					<li>
						<Link to="/contact"><img src={contactIcon} alt="Home Icon"/></Link>
					</li>
				</ul>
			</nav>
		</footer>

	  </div>
	);
}