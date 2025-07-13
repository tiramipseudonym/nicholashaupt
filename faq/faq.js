function toggleAnswer(id) {
	var answer = document.getElementById(id);
	var isHidden = window.getComputedStyle(answer).display === "none";
  
	answer.style.display = isHidden ? "block" : "none";
  }