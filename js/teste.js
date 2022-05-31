
//mostrar lista
funcaoget()
function funcaoget() {
	fetch("http://localhost:8080/clientes")
		.then(function (response) {
			var retorno = response.json()
			return retorno
		}).then(function (data) {
			data.forEach(element => {
				console.log(element)
				var tabela = document.getElementById("tabela");
				var numeroLinhas = tabela.rows.length;
				var linha = tabela.insertRow(numeroLinhas);
				var celula1 = linha.insertCell(0);
				var celula2 = linha.insertCell(1);
				var celula3 = linha.insertCell(2);
				var celula4 = linha.insertCell(3);
				var celula5 = linha.insertCell(4);
				var celular6 = linha.insertCell(5);
				celula1.innerHTML = element.id;
				celula2.innerHTML = element.nome;
				celula3.innerHTML = element.idade;
				celula4.innerHTML = element.email;
				celula5.innerHTML = element.dataCadastro;
				celular6.innerHTML = element.numero;
			});
		});
}
//------------------------------------------------------------------

//metodo de enviar/cadastrar
function enviar() {
	var nome = document.getElementById("inp1")
	console.log(nome.value)
	if (nome.value == "") {
		document.getElementById('inp1').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('inp1').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var idade = document.getElementById("inp2")
	console.log(idade.value)
	if (idade.value == "") {
		document.getElementById('inp2').style.backgroundColor = "red";
		console.log("oi")
		return
	}
	else {
		document.getElementById('inp2').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var data = document.getElementById("put1")
	if (data.value == "") {
		document.getElementById('put1').style.backgroundColor = "red";
		console.log("oi")
		return
	}
	else {
		document.getElementById('put1').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var email = document.getElementById("put4")
	if (email.value == "") {
		document.getElementById('put4').style.backgroundColor = "red";
		console.log("oi")
		return
	}
	else {
		document.getElementById('put4').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var numero = document.getElementById("num1")
	if (numero.value == "") {
		document.getElementById('num1').style.backgroundColor = "red";
		console.log("oi")
		return
	}
	else {
		document.getElementById('num1').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var json_post = { "nome": nome.value, "idade": idade.value, "dataCadastro": data.value, "email": email.value, "numero": numero.value }
	var texto_post = JSON.stringify(json_post)
	confirmsend(texto_post)
}
function enviarpost(body) {
	var options = {
		method: 'POST',
		body: body,
		headers: {
			"Content-Type": "application/json"
		}
	}
	fetch("http://localhost:8080/clientes", options)
		.then(function (response) {
			var retorno = response.json()
			return retorno
		}).then(function (data) {
			console.log(data);
		});
}
function confirmsend(texto_post) {
	if (confirm("Deseja adicionar esse usuario?")) {
		enviarpost(texto_post)
		alert("Usuario Cadastrado!")
	}
}
//-----------------------------------------------------------------------

//metodo atualizar
function envio() {
	var id = document.getElementById("id")
	if (id.value == "") {
		document.getElementById('id').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('id').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var nome = document.getElementById("inp3")
	if (nome.value == "") {
		document.getElementById('inp3').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('inp3').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var idade = document.getElementById("inp4")
	if (idade.value == "") {
		document.getElementById('inp4').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('inp4').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var data = document.getElementById("put2")
	if (data.value == "") {
		document.getElementById('put2').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('put2').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var email = document.getElementById("put5")
	if (email.value == "") {
		document.getElementById('put5').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('put5').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var numero = document.getElementById("num2")
	if (numero.value == "") {
		document.getElementById('num2').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('num2').style.backgroundColor = "rgb(192, 194, 205)";
	}


	var json_post = { "id": id.value, "nome": nome.value, "idade": idade.value, "dataCadastro": data.value, "email": email.value, "numero": numero.value }
	var texto_post = JSON.stringify(json_post)
	confirmalt(texto_post)
}
function enviarpost(body) {
	var options = {
		method: 'POST',
		body: body,
		headers: {
			"Content-Type": "application/json"
		}
	}
	fetch("http://localhost:8080/clientes", options)
		.then(function (response) {

			var retorno = response.json()

			return retorno
		}).then(function (data) {
			console.log(data);

		});
}
function confirmalt(texto_post) {
	if (confirm("Deseja alterar este usuario?")) {
		enviarpost(texto_post)
		alert("Usuario Atualizado!")
	}
}

//------------------------------------------------------------------------------------

//metodo deletara
function deletar() {
	var ID = document.getElementById("inp5")
	if (ID.value == "") {
		document.getElementById('inp5').style.backgroundColor = "red";
		return
	}
	else {
		document.getElementById('inp5').style.backgroundColor = "rgb(192, 194, 205)";
	}
	var iddeletar = ID.value
	deletardel(iddeletar)
	if (confirm("Deseja deletar este Id?")) {
		deletardel(iddeletar)
		alert("Usuario deletado")

	}
}
function deletardel(iddeletar) {
	var options = {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json"
		}
	}
	fetch("http://localhost:8080/clientes/" + iddeletar, options)
		.then(function (response) {
			return response
		}).then(function (data) {
			console.log(data);

		});
}

//----------------------------------------------------------

//metodo buscar por id
function botaoBuscar() {
	var tabela = document.getElementById("tabela");
	var numeroLinhas = tabela.rows.length;
	var LinhaInicialPulandoCabecalho = 1
	for (var i = LinhaInicialPulandoCabecalho; i < numeroLinhas; i++) {
		tabela.deleteRow(LinhaInicialPulandoCabecalho);
	}
	mostrarid()
}

function mostrarid() {
	var id = document.getElementById("inputBuscar")
	
	fetch("http://localhost:8080/clientes/" + id.value)
		.then(function (response) {
			var retorno = response.json()
			return retorno
		}).then(function (data) {
			console.log(data)
			var tabela = document.getElementById("tabela");
			var numeroLinhas = tabela.rows.length;
			var linha = tabela.insertRow(numeroLinhas);
			var celula1 = linha.insertCell(0);
			var celula2 = linha.insertCell(1);
			var celula3 = linha.insertCell(2);
			var celula4 = linha.insertCell(3);
			var celula5 = linha.insertCell(4);
			var celular6 = linha.insertCell(5);
			celula1.innerHTML = data.id;
			celula2.innerHTML = data.nome;
			celula3.innerHTML = data.idade;
			celula4.innerHTML = data.email;
			celula5.innerHTML = data.dataCadastro;
			celular6.innerHTML = data.numero;
		})
}
//--------------------------------------------------------------------------