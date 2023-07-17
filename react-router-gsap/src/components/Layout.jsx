import {Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
	  <div>
		{/* A "layout route" is a good place to put markup you want to
			share across all the pages on your site, like navigation. */}
		<header>
		<nav className="navbar">
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
	  </div>
	);
  }