#pragma strict

class objetoCrime extends Objeto {

    function Start()
    {
        super();

        tipoDinheiro = "sujo";
        componentesValores = [nome, entidade.getFuncTamanho(tipo).ToString(), "$ " + entidade.organizarValor(getValor()), getAtributoTexto(), getSecTexto()];

    }

    function alternarInfo(condicao : boolean)
    {
        this.transform.GetChild(1).gameObject.SetActive(condicao);
    }

    function OnMouseEnter()
    {
        alternarInfo(true);
    }

    function OnMouseDown()
    {
        transacao(comprar());
    }

    function OnMouseExit()
    {
        alternarInfo(false);
    }

    function transacao(comprou : boolean)
    {
        var contador = GameObject.Find("Transacao").GetComponent(contadorInstantaneo);
        
        if (comprou)
            contador.contarTransacao("complete");
        else
            contador.contarTransacao("failed");
    }
    
}