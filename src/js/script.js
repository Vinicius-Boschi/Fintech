let input = document.querySelector("#password")
let imgEye = document.querySelector("#img")
let rptpassword = document.querySelector("#rptpassword")
let otherImg = document.querySelector("#otherImg")
let check = document.querySelector("#checkEqual")

imgEye.addEventListener("click", function() {
    input.type = input.type == 'text' ? 'password' : 'text' // Se a condição for verdadeira ele mostra a senha em texto, se não ele volta a esconder ela.
})

otherImg.addEventListener("click", function() {
    rptpassword.type = rptpassword.type == 'text' ? 'password' : 'text'
})

function strongPassword() { 
	let numbers = /([0-9])/
	let tiny = /([a-z])/
	let uppercase = /([A-Z])/
	let diferent = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

	if ($('#password').val().length < 6) { 
        // Se for menor que 6, mostra essa mensagem na tela.
		$('#status').html("<p class='text-red-500 font-bold'>Fraco, insira no mínimo 6 letras</p>")
	} else {  	
		if ($('#password').val().match(numbers) && $('#password').val().match(tiny) && $('#password').val().match(uppercase) && $('#password').val().match(diferent)) { 
            // Se tiver todos esses atributos, mostra essa.
			$('#status').html("<p class='text-green-500 font-bold'>Forte</p>")
		} else { 
            // Se só tiver alguns, mostra essa.
			$('#status').html("<p class='text-orange-500 font-bold'>Médio</p>")
		}
	}
}

function passwordEqual() {
    if (rptpassword.value === input.value) {
        check.innerHTML = `<p class='text-green-500 font-bold'>As senhas são iguais.</p>`
    } else {
        check.innerHTML = `<p class='text-red-500 font-bold'>As senhas são diferentes.</p>`
    }
}