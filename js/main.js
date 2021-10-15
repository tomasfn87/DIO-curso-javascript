const calcular_idade = (dados_cliente) => {
    const data = new Date
    const data_ano = data.getFullYear()
    const data_mes = data.getMonth()
    const data_dia = data.getDate()

    const idade = data_ano - dados_cliente.ano_nascimento
    if (data_mes > dados_cliente.mes_nascimento) {
        return idade
    }
    else if (data_mes == dados_cliente.mes_nascimento) {
        if (data_dia >= dados_cliente.dia_nascimento) {
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
    idade = `Meu nome é ${dados_cliente.nome} e tenho `
            + `${calcular_idade(dados_cliente)} anos de idade.`
    
    console.log(idade)
    $("#idade").html(idade)
}

$(function() {
    $("div.proximo").hide("slow")
    $("div#item-1").click(function(){
        $("#idade").hide("slow")
    })
    $("div#item-1").keypress(function(){
        $("div#item-2").show("slow")
    })
    $("div#item-1").click(function(){
        $("div#item-2").show("slow")
    })
    $("div#item-2").keypress(function(){
        $("div#item-3").show("slow")
    })
    $("div#item-3").keypress(function(){
        $("div#item-4").show("slow")
    })
    $("div#item-4").keypress(function(){
        $("div#item-5").show("slow")
    })
    $("div#item-5").click(function(){
        $("div.proximo").hide("slow")
        $("#idade").show("slow")
        $(":input").val('');
    })
})
