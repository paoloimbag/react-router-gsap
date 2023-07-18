import {Outlet, Link } from "react-router-dom";
import logo from './../assets/images/logo.png';

export default function Layout() {
	return (
	  <div>
		{/* A "layout route" is a good place to put markup you want to
			share across all the pages on your site, like navigation. */}
		<header>
		<nav className="navbar">
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

		</header>
  
		{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the child routes we defined above. */}
		<Outlet />


		<hr/>

		<footer>
			<nav className="navbar">
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
		</footer>

	  </div>
	);
  }