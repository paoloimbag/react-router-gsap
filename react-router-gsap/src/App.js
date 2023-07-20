import { Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageTransition from './components/Transition';
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



			<Helmet>
				<title>React Router - Paolo Imbag • INM 420</title>
			</Helmet>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<PageTransition><Home /></PageTransition>} />
					<Route path="about" element={<PageTransition><About /></PageTransition>} />
					<Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
					<Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
					<Route path="*" element={<PageTransition><Error404 /></PageTransition>} />
				</Route>
			</Routes>
		</div>
	);
}
