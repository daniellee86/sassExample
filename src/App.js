import "./css/style.css"
function App() {
  return (
    <div className="App">
      <header className="showcase">
			<div className="container">
				<nav>
					<h1 className="logo">CLOUGH Media</h1>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>
					</ul>
				</nav>

				<div className="showcase-content">
					<div>
						<h1>Bring Your Marketing To Life.</h1>
						<p className="my-3">
						Digital marketing agency based in Manchester, UK. Specialising in web development, web design, 
						social media marketing and mobile app development services.
						</p> 
						<a href="#" className="btn-primary">Learn More</a>
						<a href="#" className="btn-secondary">Sign Up</a>
					</div>
					<img className="p-2"
						src="https://themesbrand.com/softland/layout/images/features/img-4.png"
					/>
				</div>
			</div>
		</header>

    </div>
  );
}

export default App;
