import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";

export default function App() {
	return (
		<div>
			{/* <h1>Basic Example</h1> */}

			{/* <p>
				This example demonstrates some of the core features of React Router
				including nested <code>&lt;Route&gt;</code>s,{" "}
				<code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
				"*" route (aka "splat route") to render a "not found" page when someone
				visits an unrecognized URL.
			</p> */}

			{/* Routes nest inside one another. Nested route paths build upon
						parent route paths, and nested route elements render inside
						parent route elements. See the note about <Outlet> below. */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />

					{/* Using path="*"" means "match anything", so this route
								acts like a catch-all for URLs that we don't have explicit
								routes for. */}
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</div>
	);
}







