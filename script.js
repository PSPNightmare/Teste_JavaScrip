let nomesLista = [];

function addNome() {
    let nome = document.getElementById('CaixaTextoUsuario').value;
    let senha = document.getElementById('CaixaTextoSenha').value;
    if (nome && senha) {
        nomesLista.push({ nome, senha });
        document.getElementById('CaixaTextoUsuario').value = '';
        document.getElementById('CaixaTextoSenha').value = '';
    }
}

function mostrarLista() {
    let lista = document.getElementById('listaUsuarios');
    lista.innerHTML = '';
    
    // Adicionamos a "posicao" para o JavaScript saber o índice de cada objeto na lista
    nomesLista.forEach((user, posicao) => {
        let li = document.createElement('li');
        // Deixamos o li como flex para o botão de editar ficar alinhado ao lado do texto
        li.className = 'bg-gray-200 p-2 m-2 rounded-sm flex justify-between items-center';

        // 1. Criamos um elemento de texto para as informações do usuário
        let textoUsuario = document.createElement('span');
        textoUsuario.textContent = `Usuário: ${user.nome}, Senha: ${user.senha}`;

        // 2. Criamos o botão de Editar
        let botaoEditar = document.createElement('button');
        botaoEditar.textContent = "Editar";
        botaoEditar.className = 'bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-2 py-1 rounded-sm cursor-pointer ml-2 transition-colors duration-300';
        
        // Quando clicar, avisa a função qual posição da lista deve ser editada
        botaoEditar.onclick = function() {
            editarUsuario(posicao);
        };

        // Colocamos o texto e o botão dentro do item da lista (li)
        li.appendChild(textoUsuario);
        li.appendChild(botaoEditar);
        
        // Adicionamos o li completo na lista do HTML
        lista.appendChild(li);
    });
}

// Lógica para editar o Objeto específico
function editarUsuario(posicao) {
    // Pegamos o objeto inteiro do usuário baseado na posição dele
    let usuarioAtual = nomesLista[posicao];

    // Pergunta o novo nome (já trazendo o nome atual preenchido)
    let novoNome = prompt("Digite o novo nome de usuário:", usuarioAtual.nome);
    
    // Se o usuário digitou algo e não cancelou, pergunta a nova senha
    if (novoNome && novoNome.trim() !== "") {
        let novaSenha = prompt("Digite a nova senha:", usuarioAtual.senha);
        
        if (novaSenha && novaSenha.trim() !== "") {
            // Atualiza os dados dentro do objeto na memória do JavaScript
            nomesLista[posicao].nome = novoNome;
            nomesLista[posicao].senha = novaSenha;

            // Recarrega a lista no pop-up para mostrar os dados novos imediatamente!
            mostrarLista();
        }
    }
}


// 2. Função para ABRIR o Pop-up
function abrirPopUp() {
    // Primeiro, chamamos a função que desenha os nomes dentro do pop-up
    mostrarLista(); 

    // Depois, pegamos o pop-up pelo ID e mandamos ele APARECER na tela
    let popup = document.getElementById('meuPopUp');
    popup.showModal(); // Esse é o comando mágico do navegador!
}

// 3. Função para FECHAR o Pop-up
function fecharPopUp() {
    let popup = document.getElementById('meuPopUp');
    popup.close(); // Esse comando faz o pop-up sumir da tela
}
