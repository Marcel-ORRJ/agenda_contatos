const form = document.getElementById('form-contatos')
const inputNomeContato = document.getElementById('nome-contato')
const inputDDDContato = document.getElementById('ddd-contato')
const inputNumeroContato = document.getElementById('numero-contato')
const contatos = []
const ddd = []
const numeros = []
let linhas = ''

ddd.push('Distrito Federal (61)')
ddd.push('Goiás (62 64)')
ddd.push('Mato Grosso (65 66)')
ddd.push('Mato Grosso do Sul (67)')
ddd.push('Alagoas (82)')
ddd.push('Bahia (71, 73, 74, 75 77)')
ddd.push('Ceará (85 88)')
ddd.push('Maranhão (98 99)')
ddd.push('Paraíba (83)')
ddd.push('Pernambuco (81 87)')
ddd.push('Piauí (86 89)')
ddd.push('Rio Grande do Norte (84)')
ddd.push('Sergipe (79)')
ddd.push('Acre (68)')
ddd.push('Amapá (96)')
ddd.push('Amazonas (92 97)')
ddd.push('Pará (91, 93 94)')
ddd.push('Rondônia (69)')
ddd.push('Roraima (95)')
ddd.push('Tocantins (63)')
ddd.push('Espírito Santo (27 28)')
ddd.push('Minas Gerais (31, 32, 33, 34, 35, 37 38)')
ddd.push('Rio de Janeiro (21, 22 24)')
ddd.push('São Paulo (11, 12, 13, 14, 15, 16, 17, 18 19)')
ddd.push('Paraná (41, 42, 43, 44, 45 46)')
ddd.push('Rio Grande do Sul (51, 53, 54 55)')
ddd.push('Santa Catarina (47, 48 49)')

function localizaDDD () {
    let pesquisaDDD = ddd.filter(function(valor) {
        return valor.indexOf(inputDDDContato.value) !== -1
    })

    if (pesquisaDDD != '')
    {
        return JSON.stringify(pesquisaDDD).replace(/[^a-zA-Záàâãéèêíïóôõöúçñ\s]/g, '')
    } else {
        return 'erro'
    }
    
}

function verificaForm () {
    if (contatos.includes(inputNomeContato.value)) {
        inputNomeContato.style.borderLeft = '2px solid #d31616'
        inputNomeContato.style.borderBottom = '2px solid #d31616'
        inputNomeContato.style.outlineColor = '#d31616'
        return 'erro'
    } else {
        inputNomeContato.style.border = ''
        inputNomeContato.style.outline = ''
    }

    if (numeros.includes(inputNumeroContato.value)) {
        inputNumeroContato.style.borderLeft = '2px solid #d31616'
        inputNumeroContato.style.borderBottom = '2px solid #d31616'
        inputNumeroContato.style.outlineColor = '#d31616'
        return 'erro'
    } else {
        inputNumeroContato.style.border = ''
        inputNumeroContato.style.outline = ''
    }

    if (localizaDDD() == 'erro') {
        inputDDDContato.style.borderLeft = '2px solid #d31616'
        inputDDDContato.style.borderBottom = '2px solid #d31616'
        inputDDDContato.style.outlineColor = '#d31616'
        return 'erro'
    } else {
        inputDDDContato.style.border = ''
        inputDDDContato.style.outline = ''
    }
}

function adicionaLinha () {
    if (localizaDDD() != 'erro' && verificaForm() != 'erro') {
        let linha = ''
        linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${localizaDDD()}</td>`
        linha += `<td>(${inputDDDContato.value}) ${inputNumeroContato.value}</td>`
        linha += `</tr>`
    
        linhas += linha
    
        contatos.push(inputNomeContato.value)
        ddd.push(inputDDDContato.value)
        numeros.push(inputNumeroContato.value)
    
        inputNomeContato.value = ''
        inputDDDContato.value = ''
        inputNumeroContato.value = ''
    } else {
        alert('Informações inválidas, verifique os campos')
    }
}

function atualizaAgenda () {
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaAgenda()
})

form.addEventListener('keyup', function(e) {
    verificaForm()
})