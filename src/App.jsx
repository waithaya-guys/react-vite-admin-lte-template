import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import { About, Content, Dash1, Dash2, NotFound } from './pages';

function App() {

	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header />
				<SideBar />
				<div className="content-wrapper">
					<Routes>
						<Route path="/" element={<Content />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/dash1" element={<Dash1 />}></Route>
						<Route path="/dash2" element={<Dash2 />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
