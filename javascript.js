function mudaFoto (foto)
	{
		document.getElementById("icone").src = foto;
	}


var realtamanho = new Number();
var realtamanho = 14;
	function tamanhoreal(){
		document.getElementById("conteudo").style.fontSize=realtamanho+'px';
	}
	
	function fonte(e){
		var elemento=document.getElementById("conteudo");
		var atual=elemento.style.fontSize;
		if (e == 'w'){
			atual = parseInt(atual)+2+'px';

		}else if (e =='x'){
			atual = parseInt(atual)-2+'px';

		}else if (e == 'y'){
			atual = realtamanho+'px';

		}

			elemento.style.fontSize=atual;
}

function caracteres(){
	var max=new Number();
	max = 200;
	var atual = document.getElementById('mensagem').value.length;
	var valor = new Number();
	valor=max-atual;
	if (valor >=0){
		if (valor == 1){valor=0}
		document.getElementById('caracterrestante').innerHTML=valor+' Caracteres Restantes';
		document.getElementById('caracterrestante').style.color='black';
		document.getElementById('botaoenviar').disabled='';
	}else{
		document.getElementById('botaoenviar').disabled='disabled';
		document.getElementById('caracterrestante').style.color='red';
	}
}

function validar(){
	var nome = frm_usuario.frm_nome.value;
	var email = frm_usuario.frm_email.value;
	var senha = frm_usuario.frm_senha.value;
	var rua = frm_usuario.frm_rua.value;
	var numero = frm_usuario.frm_numero.value;
	var cidade= frm_usuario.frm_cidade.value;

	if(nome == ''){
		alert('Preencha o nome!');
		frm_usuario.nome.focus();
		return false;
	}

	if(email == '' || email.indexOf('@') == -1 ){
		alert('Preencha o email!');
		frm_usuario.email.focus();
		return false;
	}

	if(senha == '' || senha.length < 12){
		alert('Preencha a senha, mínimo 12 caracteres!');
		frm_usuario.senha.focus();
		return false;
	}

	if(rua == ''){
		alert('Preencha o nome da rua!');
		frm_usuario.rua.focus();
		return false;
	}

	if(numero == ''){
		alert('Preencha o número!');
		frm_usuario.numero.focus();
		return false;
	}

	if(cidade == ''){
		alert('Preencha a cidade!');
		frm_usuario.cidade.focus();
		return false;
	}
}
