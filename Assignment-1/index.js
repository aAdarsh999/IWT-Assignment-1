function start() {
    document.head.innerHTML = `<link rel="stylesheet" href="style.css">
		                            <title>Javascript Flashcards</title>`
    document.body.innerHTML = `<main>
			<div class="top">
				<!-- NAVBAR HIDDEN AT 761PX -->
				<div class="navbar">
					<div class="dropdown">
						<button class="dropbtn">Vocabulary</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="basic">Basic Vocabulary</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">Operators</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="basic-operators">Basic Operators</button>
							<button class="linkbtn" data-category="ternary-operators">Ternary Operators</button>
							<button class="linkbtn" data-category="bitwise-operators">Bitwise Operators</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">Functions</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="output-data">Outputting Data</button>
							<button class="linkbtn" data-category="global-functions">Global Functions</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">Arrays</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="array-methods">Array Methods</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">Strings</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="string-methods">String Methods</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">Numbers && Math</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="number-methods">Number Methods</button>
							<button class="linkbtn" data-category="math-methods">Math Methods</button>
						</div>
					</div>
					<div class="dropdown">
						<button class="dropbtn">THE DOM</button>
						<div class="dropdown-content">
							<button class="linkbtn" data-category="dom-node-prop">DOM Node Properties</button>
							<button class="linkbtn" data-category="dom-methods">DOM Node Methods</button>
							<button class="linkbtn" data-category="element-methods">DOM Element Methods</button>
						</div>
					</div>
				</div>
			</div>
			<!-- 		NAVBAR END -->
			<div class="mobilenav">
				<button class="mobile-drop">Categories</button>
				<div class="dropContainer hidden">
					<button class="linkbtn mobileDD hidden" data-category="basic">Basic Vocabulary</button>
					<button class="linkbtn mobileDD hidden" data-category="basic-operators">Basic Operators</button>
					<button class="linkbtn mobileDD hidden" data-category="ternary-operators">Ternary Operators</button>
					<button class="linkbtn mobileDD hidden" data-category="bitwise-operators">Bitwise Operators</button>
					<button class="linkbtn mobileDD hidden" data-category="output-data">Outputting Data</button>
					<button class="linkbtn mobileDD hidden" data-category="global-functions">Global Functions</button>
					<button class="linkbtn mobileDD hidden" data-category="array-methods">Array Methods</button>
					<button class="linkbtn mobileDD hidden" data-category="string-methods">String Methods</button>
					<button class="linkbtn mobileDD hidden" data-category="number-methods">Number Methods</button>
					<button class="linkbtn mobileDD hidden" data-category="math-methods">Math Methods</button>
					<button class="linkbtn mobileDD hidden" data-category="dom-node-prop">DOM Node Properties</button>
					<button class="linkbtn mobileDD hidden" data-category="dom-methods">DOM Node Methods</button>
					<button class="linkbtn mobileDD hidden" data-category="element-methods">DOM Element Methods</button>
				</div>
			</div>
			<div class="card-container">
				<div class="click flipper">
					<div class="front-of-card">
						<p class="greeting"></p>
						<p class="question"></p>
					</div>
					<div class="back-of-card">
						<p class="rules"></p>
						<p class="answer"></p>
					</div>
				</div>
			</div>
			<div class="points">
				<p>Your Score</p>
				<div class="score">
					<p class="digits"></p>
				</div>
			</div>
			<div class="score-buttons">
				<div class="pass">
					<button class="correct">I Got It Right!</button>
				</div>
				<div class="fail">
					<button class="wrong">I Got It Wrong</button>
				</div>
			</div>
			<div class="moveOn">
				<div class="back">
					<button class="previous">Previous Card</button>
				</div>
				<div class="forward">
					<button class="next">Next Card</button>
				</div>
			</div>
			<button onclick="quit()" class="quit">Quit</button>
			<button onclick="display()" class="quit">View Leaderboard</button>
			<div id="box"></div>
		</main>`
    s1 = document.createElement('script')
    s1.src = "main.js"
    s2 = document.createElement('script')
    s2.src = "questions.js"
    document.body.appendChild(s1)
    document.body.appendChild(s2)
}