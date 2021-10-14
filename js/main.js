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
    let dados_cliente = {
        nome: document.getElementById("nome").value,
        dia_nascimento: document.getElementById("dia").value,
        mes_nascimento: document.getElementById("mes").value,
        ano_nascimento: document.getElementById("ano").value
    }
    idade = `Meu nome é ${dados_cliente.nome} e tenho `
            + `${calcular_idade(dados_cliente)} anos de idade.`

    document.getElementById("idade").innerHTML = idade
    console.log(idade)
}