//Criando botoes 

function BotaoDelet(){ 

    const botao_deletar =  document.createElement('button') 
     botao_deletar.classList.add("btn", "btn-danger") 
    botao_deletar.innerHTML = "Delet" 
    botao_deletar.type = "button" 
    botao_deletar.addEventListener("click", DeletItem)
    
    return botao_deletar
    }
    
    
    function BotaoEdit(){

    const botao_editar =  document.createElement('button') 
    botao_editar.classList.add("btn", "btn-warning") 
    botao_editar.innerHTML = "Edit" 
    botao_editar.type = "button" 
    botao_editar.addEventListener("click", EditItem) 
    
    return botao_editar
    }
    
    
    function BotaoSave(){ 

    const botao_salvar =  document.createElement('button') 
    botao_salvar.classList.add("btn", "btn-black") 
    botao_salvar.innerHTML = "Save" 
    botao_salvar.type = "button" 
    botao_salvar.addEventListener("click", SaveItem) 
    
    return botao_salvar
    }



    
    //Dando funcionalidade aos butoes criados acima
    
    function DeletItem(){
    console.log(this.parentElement) 
    this.parentElement.remove() 
    }
    
    
    function EditItem(){

        const item = this.parentElement
        const edição = document.createElement("input") 
        item.innerHTML = '' 
        item.appendChild(edição) 
        item.appendChild(BotaoDelet()) 
        item.appendChild(BotaoSave()) 
        edição.select() 
    }
    

    function SaveItem(){
        const novo_item = this.parentElement.firstChild
        const item = this.parentElement 
        item.innerHTML = novo_item.value 
        item.appendChild(BotaoDelet()) 
        item.appendChild(BotaoEdit()) 
    }
    


    function Submit(){ 

        const lista = document.querySelector('[data-task]') 
        const valor = document.querySelector('[data-form-input]') 
        const novo_item = document.createElement("li") 

        novo_item.className = "list-group-item";
        novo_item.innerHTML = valor.value 

        novo_item.appendChild(BotaoDelet()) 
        novo_item.appendChild(BotaoEdit())

        lista.appendChild (novo_item) 
        document.getElementById("item").value = ""
    }







// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
