# RELATÓRIO DE TESTES DE SOFTWARE

## 1\. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | \[Academia Viva\] |
| **Resumo do projeto:** | \[O que é a aplicação\] |
| **Nome do testador:** | \[Letícia Ribeiro Heidericke\] |
| **Data dos testes:** | \[05/11/2026\] |
| **Tecnologias utilizadas:** | \[JavaScript, Node.js, Jest e NPM\] |

---

## 2\. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.

- Qual funcionalidade foi testada?
- O que os testes pretendiam verificar?
- Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

\[O objetivo foi testar a função validateLead, responsável por validar os dados dos cadastros. Os testes verificaram se os campos estavam preenchidos corretamente, identificando possíveis erros em nomes, e-mails, telefones e modalidades, garantindo que dados inválidos fossem rejeitados.\]

---

## 3\. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | \[ES6+\] |
| Node.js | \[Versão] |
| Jest | \[Versão\] |
| NPM | \[Versão\] |
| Outras | \[Visual Studio Code\] |

**Comando utilizado preparar o ambiente:**

``` bash
[npm install]
```

**Comando utilizado executar o sistema (servidor):**

``` bash
[npm start]
```

**Comando utilizado para executar os testes:**

``` bash
[npm test]
```

---

## 4\. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | \[validateLead\] | \[validation.js\] | \[Verificar se os cadastros são válidos.\] |
| 2 | \[Validação de nome\] | \[validation.js\] | \[Verificar tamanho, espaços e tipo de nome\] |
| 3 | \[Validação de e-mail\] | \[validation.js\] | \[Identificar e-mails e tipos incorretos\] |

---

## 5\. Registro detalhado dos testes realizados

Registre individualmente TODOS os testes implementados.

Para cada teste, preencha as informações abaixo.

### Teste 01 – \[Cadastro completo válido\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Aceita cadastro comprlto válido\]
- **Objetivo:** \[Verifica se aceita um cadastro com todos os campos preenchidos corretamente\]
- **Entrada utilizada:** \[Nome: Ana Silva; e-mail: ana@email.com; telefone: 27999999999; modalidade: Online; mensagem: Tenho interesse no curso.\]
- **Resultado esperado:** \[true\]
- **Resultado obtido:** \[true\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
 test('Aceita cadastro completo válido', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Online',
        message: 'Tenho interesse no curso'
    })).toBe(true);
}); 
```

---

### Teste 02 – \[Cadastro mínimo válido\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Aceita cadastro mínimo válido\]
- **Objetivo:** \[Verificar se aceita um cadastro contendo apenas os campos obrigatórios\]
- **Tipo de cenário:** \[Positivo\]
- **Entrada utilizada:** \[Nome: Ana Silva; e-mail: ana@email.com; telefone: 27999999999; modalidade: Online.\]
- **Resultado esperado:** \[True\]
- **Resultado obtido:** \[true\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Aceita cadastro mínimo válido', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(true);
});
```

---

### Teste 03 – \[Nome muito curto\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita nome muito curto\]
- **Objetivo:** \[Verificar se rejeita nomes com menos de três caracteres\]
- **Tipo de cenário:** \[Limite\]
- **Entrada utilizada:** \[Nome: An\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita nome muito curto', () => {
    expect(validateLead({
        name: 'An',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 04 – \[Nome com espaços vazios\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita nomes com espaços vazios\]
- **Objetivo:** \[Verifica se rejeita nome spreenchidos apenas com espaços\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[Nome: "   "\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita nome com espaços vazios', () => {
    expect(validateLead({
        name: '   ',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 05 – \[Nome com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejieta um nome que não seja stirng\]
- **Objetivo:** \[Verifica se rejeita nomes que não sejam textos\]
- **Tipo de cenário:** \[Excepcional\]
- **Entrada utilizada:** \[Nome: 123\]
- **Resultado esperado:** \[false?\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita nome que não seja string', () => {
    expect(validateLead({
        name: 123,
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 06 – \[E-mail sem @\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejieta e-mail sem @\]
- **Objetivo:** \[Verificar se rejeita e-mails sem o símbolo @\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[E-mail: anaemail.com\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita e-mail sem @', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'anaemail.com',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 07 – \[E-mail incompelto\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita e-mail incompleto\]
- **Objetivo:** \[Verificar se rejeita e-mails sem domínio completo e sem ponto\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[E-mail: email@email\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita e-mail incompleto', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'email@email',
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 08 – \[E-mail com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita e-mail que não seja string\]
- **Objetivo:** \[Verificar se rejeitar e-mails que não sejam textos\]
- **Tipo de cenário:** \[Excepcional\]
- **Entrada utilizada:** \[E-mail: 12345\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita e-mail que não seja string', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 12345,
        phone: '27999999999',
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 09 – \[Telefone com tipo incorreto\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita telefone com tipo numérico\]
- **Objetivo:** \[Verificar se rejeita telefones enviados como números\]
- **Tipo de cenário:** \[Excepcional\]
- **Entrada utilizada:** \[Telefone: 27999999999 (numérico)\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita telefone com tipo numérico', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'ana@email.com',
        phone: 27999999999,
        interest: 'Online'
    })).toBe(false);
});
```

---

### Teste 10 – \[Modalidade inválida\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejeita modalidade inválida\]
- **Objetivo:** \[Verificar se rejieta modalidades que não estão na lista permitida\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[Modalidade: Presencial\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita modalidade inválida', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'Presencial'
    })).toBe(false);
});
```

---

### Teste 11 – \[Modalidade com diferenciação de caixa\]

- **Funcionalidade testada:** \[validateLead\]
- **Nome do teste no Jest:** \[Rejieta modalidade com caixa diferente\]
- **Objetivo:** \[Verificar se diferencia letras maiúsculas e minúsculas\]
- **Tipo de cenário:** \[Negativo\]
- **Entrada utilizada:** \[Modalidade: online\]
- **Resultado esperado:** \[false\]
- **Resultado obtido:** \[false\]
- **Status:** \[Aprovado\]

**Código do teste:**

``` javascript
test('Rejeita modalidade com caixa diferente', () => {
    expect(validateLead({
        name: 'Ana Silva',
        email: 'ana@email.com',
        phone: '27999999999',
        interest: 'online'
    })).toBe(false);
});
```

---

> **Importante:** Duplique o bloco de registro acima para documentar todos os testes realizados. Não registre apenas os testes aprovados. Os testes reprovados também devem ser documentados.

---

## 6\. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
| --- | ---: |
| Total de testes executados | \[11\] |
| Testes aprovados (Passed) | \[11\] |
| Testes reprovados (Failed) | \[0\] |

**Percentual de aprovação:**

\[Calcule: (Testes aprovados ÷ Total de testes executados) × 100\]

---

## 7\. Evidências da execução dos testes

Insira capturas de tela (prints) que comprovem a execução dos testes no ambiente de desenvolvimento.
![alt text](image.png)

Inclua evidências que mostrem:

- Execução dos testes no Jest.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, quando houver.
- Correções realizadas após a identificação de falhas, se aplicável.

---

## 8\. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] 
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido/Pendente\] 

Caso nenhum problema tenha sido identificado, explique.

**Resposta:**

\[Escreva aqui\]

---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

\[Os testes buscaram verificar se a função aceita informações válidas e rejeita dados incorretos. Foram analisados diferentes cenários para identificar possíveis falhas na validação dos cadastros. Os resultados finais e as correções serão registrados após a execução dos testes.\]

---

## 10\. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

\[Os testes de software foram importantes para verificar o funcionamento da aplicação e identificar possíveis erros durante o cadastro de interessados. Por meio dos testes unitários, foi possível avaliar diferentes situações, incluindo dados válidos e inválidos. Esse processo contribui para melhorar a qualidade, a segurança e a confiabilidade do sistema.\]

---

**Relatório elaborado por:** \[Letícia Ribeiro Heidericke\]

**Data da última atualização:** \[05/11/2026\]