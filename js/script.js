let slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  let i;
		  let slides = document.getElementsByClassName("mySlides");
		  let dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " active";
		}
		
		// Fazendo com que, ao clicar em qualquer lugar fora da área de login, saia da tela automaticamente 
		var modal = document.getElementById('id01');
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}
		
		// Fazendo com que, ao clicar em qualquer lugar fora da área de cadastro, saia da tela automaticamente 
		var modal1 = document.getElementById('id02');
		window.onclick = function(event) {
		  if (event.target == modal1) {
			modal1.style.display = "none";
		  }
		}
		
		// Faz com que apareça o alerta em cima de acordo com as informações digitada pelo usuário na tela de login
		function Login() {
			var user = document.getElementById("uname").value;
			var senha = document.getElementById("psw").value;
			
			if (user == "" || senha == "") {
				alert("Ops! Parece que você se esqueceu de algo!");
			} else {
				alert(`Seja bem-vindo(a), ${user}!`);
				modal.style.display = "none";
		
			}
				
		}
		
		// Faz com que apareça o alerta em cima de acordo com as informações digitada pelo usuário na tela de login
		function Cadastro() {
			var nome = document.getElementById("uname-cadastro").value;
			var email = document.getElementById("email").value;
			var password = document.getElementById("psw-cadastro").value;
			var password2 = document.getElementById("psw-cadastro2").value;
			
			if ((nome == "" && email == "") && (password == "" && password2 == "")) {
				alert("Ops! Parece que você se esqueceu de algo!")
			} else if (password2 != password) {
				alert("Senhas não conferem!")
			} else {
				alert(`Seja bem-vindo(a), ${nome}!`);
				modal.style.display = "none";
			}
		}

		function Pagar() {
			alert(`Perfeito! Sua compra foi concluida com sucesso!!!`);
		}

		window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("navbar").style.padding = "10px 10px";
				document.getElementById("logo").style.size = "30%";
			  } else {
				document.getElementById("navbar").style.padding = "30px 10px";
				document.getElementById("logo").style.size = "40%";
			  }
			}
			
			// Fazendo com que, ao clicar em qualquer lugar fora da área de login, saia da tela automaticamente 
			var modal = document.getElementById('id01');
			window.onclick = function(event) {
			  if (event.target == modal) {
				modal.style.display = "none";
			  }
			}
			
		// Faz com que apareça o alerta em cima de acordo com as informações digitada pelo usuário na tela de login
		function Login() {
			var user = document.getElementById("uname").value;
			var senha = document.getElementById("psw").value;
			
			if (user == "" || senha == "") {
				alert("Ops! Parece que você se esqueceu de algo!");
			} else {
				alert(`Seja bem-vindo(a), ${user}!`);
				modal.style.display = "none";
		
			}
				
		}