﻿#pragma strict

class textoMain extends MonoBehaviour {

	var entidade : entidadeLocal;
	
	var tipo : String;
	var valor : float; // valor que o texto guarda
	var textoValor : Text; // objeto do tipo texto que mostra o valor
	
	var prefixo : String;
	var sufixo : String;
	
	var quantiaDinheiro : boolean;

	function Start () 
	{
		entidade = GameObject.Find("Entidade").GetComponent(entidadeLocal);
		textoValor = gameObject.GetComponent(Text);
		valor = entidade.getValor(tipo);
	}

	function Update () 
	{
		valor = entidade.getValor(tipo);
		textoValor.text = prefixo + entidade.organizarValor(valor) + sufixo;

		if (quantiaDinheiro)
			if(GameObject.Find("pagSeguro").GetComponent(Toggle).isOn)
				tipo = "limpo";
			else
				tipo = "sujo";
	}
}