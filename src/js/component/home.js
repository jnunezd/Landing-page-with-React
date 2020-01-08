import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Cabecera />
				<div className="row text-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
}

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

function Card(props) {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325"
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}

// http://placehold.it/500x325 //

function Footer() {
	return (
		<footer className="py-5 bg-dark">
			<div className="container">
				<p className="m-0 text-center text-white">
					Copyright © Your Website 2019
				</p>
			</div>
		</footer>
	);
}

function Cabecera() {
	return (
		<header className="jumbotron my-4">
			<h1 className="display-3">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat.
			</p>
			<a href="#" className="btn btn-primary btn-lg">
				Call to action!
			</a>
		</header>
	);
}

Card.propTypes = {
	title: PropTypes.string
};
