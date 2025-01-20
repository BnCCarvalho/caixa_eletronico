Caixa Eletrônico
Descrição
Este projeto é um simulador de Caixa Eletrônico desenvolvido com HTML, CSS e JavaScript. O objetivo é fornecer uma interface amigável para o usuário realizar saques, verificar a disponibilidade de cédulas e gerenciar o saldo de maneira dinâmica e eficiente.

Funcionalidades
Exibição de Saldo Atual: Mostra o saldo disponível gerado aleatoriamente entre R$ 0 e R$ 100.000, formatado com separadores de milhar.

Cálculo de Cédulas: Permite calcular a quantidade mínima de cédulas necessárias para um saque solicitado.

Verificação de Saldo: Verifica se o valor do saque é válido e se há saldo suficiente.

Mensagem Dinâmica de Cédulas Disponíveis: Atualiza dinamicamente a mensagem com base nas cédulas disponíveis definidas no código.

Tecnologias Utilizadas
HTML5

CSS3

JavaScript (ES6)

Estrutura do Projeto
plaintext
├── index.html
├── styles
│   └── styles.css
└── script.js
Como Utilizar
Clone o repositório para sua máquina local:

sh
git clone https://github.com/seu-usuario/caixa-eletronico.git
Navegue até o diretório do projeto:

sh
cd caixa-eletronico
Abra o arquivo index.html no seu navegador preferido.

Como Funciona
Saldo Atual: O saldo é gerado aleatoriamente toda vez que a página é recarregada.

Cálculo de Saque: O usuário insere o valor desejado no campo "Valor do Saque" e clica no botão "Calcular".

Resultado: O sistema verifica se há saldo suficiente e calcula a quantidade de cada cédula necessária para o saque. Se o saldo for insuficiente, uma mensagem de "Saldo insuficiente" será exibida.

Demonstração

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.
