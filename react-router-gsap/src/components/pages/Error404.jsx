import {Link } from "react-router-dom";

export default function Error404() {
	return (
	  <div>
		<h1>Error 404</h1>
		<p>
		  <Link to="/">Go to the home page</Link>
		</p>
	  </div>
	);
  }