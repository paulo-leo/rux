# Rux: Gerenciador de Estados Inspirado no Flux

## Sobre

O Rux é uma biblioteca de gerenciamento de estados inspirada no Flux, criada por [Paulo Leonardo](https://github.com/seu-usuario). Ele simplifica o controle de estados em aplicações JavaScript, proporcionando uma abordagem direta e eficiente para o fluxo de dados.

## Principais Funcionalidades

- **Sets e Gets Simples**: Crie e acesse estados de forma intuitiva e direta.
- **Actions Poderosas**: Defina ações puras para atualizar estados de forma controlada.
- **Observadores de Estado**: Mantenha seus componentes atualizados com base em alterações específicas de estado.


# Documentação do rux.js

Este é um código que oferece funcionalidades para criação e manipulação de conjuntos de dados (sets) de forma simples.

## Funções

### `rux.has(key: string): boolean`

Verifica se uma set (conjunto) existe com a chave especificada.

- `key`: Chave a ser verificada.
- **Retorno**: Retorna `true` se a chave existir no conjunto (`rux.sets`), caso contrário, retorna `false`.

### `rux.set(key: string, value: any): void`

Cria ou atualiza uma set com a chave e valor fornecidos.

- `key`: Chave da set a ser criada ou atualizada.
- `value`: Valor a ser atribuído à set.
- **Retorno**: Sem retorno explícito (`void`).

- Para acessar o nome do seu set ou variável de configuração, basta escrever: rux.$nomeDaVariavel ou rux.get('nomeDaVariavel')


  ### `rux.action(key: string, value: callback): void`

Cria uma ação para manipular os states. A ação pode ser escrita em função pura.

- `key`: Nome da ação.
- `value`: conteúdo da função pura.

Sua ação deve retornar algum valor de manipulçaõ. para acessar a sua ação, basta escrever da seguinte forma: rux.nomeDaAction()



## Observações

Este código fornece funcionalidades básicas para gerenciamento de conjuntos de dados (sets). As funções listadas oferecem formas de criar, verificar, atualizar e deletar sets, além de outras operações. Certifique-se de consultar esta documentação para entender como utilizar cada função de forma adequada em seu projeto.

Por favor, consulte o código-fonte para detalhes adicionais e exemplos de uso.


## Instalação

Para começar a usar o Rux, instale-o em seu projeto via npm:

```bash
npm install simple-rux
