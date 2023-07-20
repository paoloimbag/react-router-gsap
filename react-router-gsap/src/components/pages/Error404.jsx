import {Link } from "react-router-dom";
// Error 404 Component
export default function Error404() {
	return (
	  <div className="container error404">
		<h1>
			Error 404 :(
		</h1>
		<Link to="/">Go to the home page</Link>
	  </div>
	);
  }