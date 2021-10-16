const calcular_idade = (dados_cliente) => {
    const data = new Date
    const idade = data.getFullYear() - dados_cliente.ano
    if (data.getMonth() > dados_cliente.mes) {
        return idade
    }
    else if (data.getMonth() == dados_cliente.mes) {
        if (data.getDate() >= dados_cliente.dia) {
            return idade
        }
    } return idade - 1
}

const mostrar_idade = () => {
    const dados_cliente = {
        nome: document.getElementById("nome").value,
        dia: document.getElementById("dia").value,
        mes: document.getElementById("mes").value,
        ano: document.getElementById("ano").value
    }
    idade = `Nome: <pop>${dados_cliente.nome}</pop> &nbsp; | &nbsp; `
            + `Idade: <pop>${calcular_idade(dados_cliente)} anos</pop>`
    console.log(idade)
    $("#idade").html(idade)
}

const mostrar_proximo = (item, tempo="slow") => {
    $(`div#item-${item}`).click(() => {
        $(`div#item-${item + 1}`).show(tempo)
    })
    $(`div#item-${item}`).keypress(() => {
        $(`div#item-${item + 1}`).show(tempo)
    })
}

$(() => {
    $("div.proximo").hide() 
    $("div#item-1").click(() => {
        $("#idade").hide("slow")
    })
    $("div#item-1").keypress(() => {
        $("#idade").hide("slow")
    })
    for ( i = 1; i < 5; i++ ) { mostrar_proximo(i) }
    $("div#item-5").click(() => {
        $("div.proximo").hide("slow")
        $("#idade").show("slow")
        $(":input").val("");
    })
})
