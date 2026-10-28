<h1>Qual é a Fruta? - Jogo de Adivinhação em JavaScript</h1>

<h2>📄 Tabela de Conteúdo
Sobre o Projeto</h2>

<h3>Funcionalidades:</h3>

Tecnologias Utilizadas

Como Executar o Projeto

Estrutura do Projeto

Melhorias Futuras

Contribuição

Autor

Licença

<h2>💡 Sobre o Projeto</h2>
"Qual é a Fruta?" é um jogo interativo de adivinhação desenvolvido com foco nos fundamentos do JavaScript puro (Vanilla JS), HTML5 e CSS3. Inspirado no clássico jogo da forca, o objetivo é adivinhar uma fruta secreta, letra por letra, antes que as tentativas se esgotem.

Este projeto foi construído para demonstrar habilidades sólidas em lógica de programação, manipulação do DOM (Document Object Model) e aplicação de princípios de design responsivo e acessibilidade. Ele serve como um exemplo prático de como o JavaScript pode ser usado para criar experiências web dinâmicas e engajadoras, com uma base de código limpa, modular e de fácil manutenção.

<h2>Funcionalidades:</h2>
Seleção Aleatória de Frutas: O jogo escolhe uma fruta aleatória de uma lista extensa a cada nova partida.

Interface Intuitiva: Exibe a palavra mascarada, o número de tentativas restantes e as letras já tentadas.

Validação de Entrada: Garante que o jogador insira apenas uma letra válida por vez, incluindo caracteres especiais do português (acentos e cedilha).

Feedback Visual: Mensagens claras indicam acertos, erros, vitória ou derrota.

Controle de Tentativas: O jogador tem um número limitado de tentativas para adivinhar a fruta.

Reinício Rápido: Um botão permite reiniciar o jogo a qualquer momento.

Design Responsivo: Layout adaptável para diferentes tamanhos de tela (desktop, tablet, mobile).

Boas Práticas de UI/UX: Transições suaves, sombras e cores que melhoram a experiência do usuário.

<h2>Tecnologias Utilizadas</h2>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

HTML5: Para a estrutura semântica e acessível da página.

Uso de elementos semânticos (<section>, <footer>).
Atributos para acessibilidade (alt, for).
CSS3: Para o estilo e responsividade da interface.

Flexbox: Para layouts flexíveis e alinhamento de elementos.
Media Queries: Para garantir a adaptabilidade em diversos dispositivos.
Custom Properties (Variáveis CSS): Para facilitar a manutenção e padronização de cores e outros estilos.
Transições e Sombras: Para uma interface mais moderna e interativa.
JavaScript (ES6+): Para a lógica do jogo e manipulação do DOM.

Vanilla JS: Foco total em JavaScript puro, sem frameworks.
Manipulação do DOM: Interação direta com elementos HTML para atualizar o estado do jogo.
Event Listeners: Para capturar interações do usuário (envio de formulário, cliques).
Arrow Functions (=>): Para funções concisas e legíveis.
const e let: Para declaração de variáveis com escopo adequado.
Métodos de Array Modernos (map, includes): Para manipulação eficiente de dados e uma abordagem mais funcional.
Separação de Preocupações: Lógica de jogo separada da estilização (manipulação de classes CSS para feedback).

<h2>Como Executar o Projeto</h2>
Para executar o jogo localmente, siga os passos abaixo:

Clone o repositório (se estiver hospedado em um Git):

bashCopiar
git clone https://github.com/ViniFerAlbuquerque/qual-e-a-fruta.git
Ou, se for apenas os arquivos, baixe o .zip e descompacte.

Navegue até o diretório do projeto:

bashCopiar
cd qual-e-a-fruta
Abra o arquivo index.html no seu navegador de preferência.

Você não precisa de um servidor local, basta abrir o arquivo diretamente.

<h2>📁 Estrutura do Projeto</h2>
qual-e-a-fruta/
<p>├── index.html        # Estrutura principal da página</p>
<p>├── style.css         # Estilos da aplicação</p>
<p>├── script.js         # Lógica do jogo em JavaScript</p>
<p>└── img/              # Diretório para imagens</p>
<p>    └── ex7_2.jpg     # Imagem de fundo/ilustração</p>
<h2>Melhorias Futuras</h2>
Com base na lógica atual, as seguintes melhorias poderiam ser implementadas:

Níveis de Dificuldade: Opções para ajustar o número de tentativas ou a complexidade das frutas.

Categorias de Palavras: Permitir que o jogador escolha categorias além de "frutas" (animais, objetos, etc.).

Feedback Visual Aprimorado: Adicionar elementos visuais (como o desenho de uma forca) para representar as tentativas perdidas.

Armazenamento Local: Usar localStorage para persistir pontuações altas ou listas de frutas personalizadas.

Adição de Novas Frutas (Desafio Implementado): Implementar uma interface para que o próprio usuário possa adicionar novas frutas à lista em tempo de execução (apenas em memória).

Interface de Configurações: Um painel para customizar o jogo (ex: ativar/desativar som, mudar tema).

<h2>🤝 Contribuição</h2>
Contribuições são bem-vindas! Se você tiver sugestões de melhoria ou quiser reportar um bug, sinta-se à vontade para:

Abrir uma issue no repositório.

Criar um fork do projeto.

Implementar suas alterações e enviar um pull request.

<h2>👤 Autor</h2>
Desenvolvido por: ViniFerAlbuquerque

<h2>📝 Licença</h2>
Este projeto está licenciado sob a Licença MIT. 
<hr>

<img src="https://github.com/ViniFerAlbuquerque/jogo-qual-e-a-fruta/blob/main/img/img-readme.png?raw=true">

[🔗Clique Aqui Para Acessar](https://viniferalbuquerque.github.io/jogo-qual-e-a-fruta/)
