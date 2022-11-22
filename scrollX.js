const button = document.createElement('button');
const img = document.createElement('i');
const x=window.matchMedia("(min-width: 1001px)")

button.addEventListener("click", () => {
	if(x.matches===true){
		window.scrollTo(0, window.scrollY);
	}else{
		window.scrollTo(0, 0);
	}
})
const principal = document.querySelector(".principal");
button.classList.add("button-Scroll");
button.title = "Tornar al principi";
button.style.position = 'fixed';
button.style.right = "10px";
button.style.bottom = "10px";
principal.appendChild(button);

window.addEventListener('scroll', (e) => {
	if(x.matches===true){

		if (window.scrollX > 1280) {
			button.innerHTML = 
			`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
			</svg>`;
			
			button.style.display = 'block';
		}
		else {
			
			button.style.display = 'none';
		}
	}else{
		console.log(window.scrollY);
		if (window.scrollY > 800) {
			button.innerHTML = 
			`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
		</svg>`;
			
			button.style.display = 'block';
		}
		else {
			
			button.style.display = 'none';
		}
	}
});
