
    
    
    let listaInput = document.querySelector("#texto");
    let botaoEnviar = document.querySelector("#botao");
    let tarefaLista = document.querySelector("ul");
    let listaDeTarefas = JSON.parse(localStorage.getItem('@Lista')) || [] ;
    
    
    
    function renderizarTexto(){
        tarefaLista.innerHTML = ''
        listaDeTarefas.map( (todo) => {
            let criaDiv = document.createElement('div');
    
            let criaLi = document.createElement("li");
            let creatText = document.createTextNode('Tarefa:'+ '' + todo + " ")
            //criaLi.innerHTML += 'tarefa: '+  todo uma outra opção de se fazer
            let criaA = document.createElement("a");
            criaA.setAttribute("href", "#")
            
            let criaTextExcluir = document.createTextNode("excluir")
            criaA.appendChild(criaTextExcluir)
            
            let posicao = listaDeTarefas.indexOf(todo)
            criaA.setAttribute("onclick",`apagar(${posicao})`)
            
            criaLi.appendChild(creatText);
            criaLi.appendChild(criaA);
            criaDiv.appendChild(criaLi)
            tarefaLista.appendChild(criaDiv);
            
            
            
        })
        
        
    }
    renderizarTexto();
    
    
    
    function adicionarTarefa (e) {
        e.preventDefault();
        if(listaInput.value === ''){
            alert('Digite uma tarefa');
            return false;
        } else {
            
            
            const novaTarefa = listaInput.value
            listaDeTarefas.push(novaTarefa)
            limpa();
            renderizarTexto();
            salvarDados();
            console.log(listaDeTarefas);
            
            
        }
        
        
        
        
        
    }
    function apagar(text) {
       listaDeTarefas.splice(text,1)
       renderizarTexto();
       salvarDados();
       
    }
    
botaoEnviar.onclick = adicionarTarefa;

function limpa () {
    document.querySelector("#texto").value = '';
    
    
}




function salvarDados(){
    
    localStorage.setItem('@Lista',JSON.stringify(listaDeTarefas));
    
}



