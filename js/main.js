const calcular_idade = (dados_cliente) => {
    const data = new Date
    const idade = data.getFullYear() - dados_cliente.ano_nascimento
    if (data.getMonth() > dados_cliente.mes_nascimento) {
        return idade
    }
    else if (data.getMonth() == dados_cliente.mes_nascimento) {
        if (data.getDate() >= dados_cliente.dia_nascimento) {
            return idade
        }
    } return idade - 1
}

const mostrar_idade = () => {
    const dados_cliente = {
        nome: document.getElementById("nome").value,
        dia_nascimento: document.getElementById("dia").value,
        mes_nascimento: document.getElementById("mes").value,
        ano_nascimento: document.getElementById("ano").value
    }
    idade = `Nome: ${dados_cliente.nome} &nbsp; | &nbsp; `
            + `Idade: ${calcular_idade(dados_cliente)} anos`
    
    console.log(idade)
    $("#idade").html(idade)
}

const mostrar_proximo = (item, tempo="slow") => {
    $(`div#item-${item}`).click(function(){
        $(`div#item-${item + 1}`).show(tempo)
    })
    $(`div#item-${item}`).keypress(function(){
        $(`div#item-${item + 1}`).show(tempo)
    })
}

$(function() {
    $("div.proximo").hide() 
    $("div#item-1").click(function(){
        $("#idade").hide("slow")
    })
    $("div#item-1").keypress(function(){
        $("#idade").hide("slow")
    })
    for (i = 1; i < 5; i++) { mostrar_proximo(i) }
    $("div#item-5").click(function(){
        $("div.proximo").hide("slow")
        $("#idade").show("slow")
        $(":input").val("");
    })
})
