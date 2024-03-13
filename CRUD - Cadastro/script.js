const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')// o modal ficara visivel na tela

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active') //ao clicar fora o modal desaparece
    }
  }

  if (edit) { //se for um item de edição
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    id = index
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }
  
}

function editItem(index) { //função para editar o item

  openModal(true, index)//chama a função openModal
}


function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()//set os dados
  loadItens()//carrega os dados novamente
}

function insertItem(item, index) {
  let tr = document.createElement('tr') //cria uma linha na tabela

    //cria as colunas nome, função e salario
    //cria o btn de edição e exclusão
  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr) //inclui  ao body cada linha(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
  } else {
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD() //vai pegar os itens do BD
  tbody.innerHTML = ''
  itens.forEach((item, index) => { //para cada dado 
    insertItem(item, index)// será criado uma linha
  })

}

// vai pegar um item no BD caso,
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [] //caso não encontre retorna vazio

const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens() //carrega os dados contidos no Banco de Dados