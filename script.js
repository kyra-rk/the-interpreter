function goToRandomComic() {
	const comicLinks = [
	  "https://kyra-rk.github.io/the-interpreter/comics/boston-commons.html",
	  "https://kyra-rk.github.io/the-interpreter/comics/wifi-password.html",
	  "https://kyra-rk.github.io/the-interpreter/comics/spikeball.html",
	  "https://kyra-rk.github.io/the-interpreter/comics/how-sareena-catches.html",
	];
  
	const randomIndex = Math.floor(Math.random() * comicLinks.length);
	window.location.href = comicLinks[randomIndex]; // or use "_blank" if you prefer a new tab
  }
  