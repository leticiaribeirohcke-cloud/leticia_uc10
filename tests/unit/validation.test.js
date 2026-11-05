
const { validateLead } = require('../../src/validation');

// Agrupa os testes da função validateLead
describe('Validação de leads', () => {

    // Teste 1: Cadastro completo válido
    test('Aceita cadastro completo válido', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online',
            message: 'Tenho interesse no curso'
        })).toBe(true);
    });

    // Teste 2: Cadastro mínimo válido, sem campos opcionais
    test('Aceita cadastro mínimo válido', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(true);
    });

    // Teste 3: Nome com menos de 3 caracteres
    test('Rejeita nome muito curto', () => {
        expect(validateLead({
            name: 'An',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 4: Nome contendo apenas espaços
    test('Rejeita nome com espaços vazios', () => {
        expect(validateLead({
            name: '   ',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 5: Nome com tipo incorreto
    test('Rejeita nome que não seja string', () => {
        expect(validateLead({
            name: 123,
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 6: E-mail sem o símbolo @
    test('Rejeita e-mail sem @', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'anaemail.com',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 7: E-mail sem domínio completo e sem ponto
    test('Rejeita e-mail incompleto', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'email@email',
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 8: E-mail com tipo incorreto
    test('Rejeita e-mail que não seja string', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 12345,
            phone: '27999999999',
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 9: Telefone enviado como número
    test('Rejeita telefone com tipo numérico', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: 27999999999,
            interest: 'Online'
        })).toBe(false);
    });

    // Teste 10: Modalidade que não existe na lista permitida
    test('Rejeita modalidade inválida', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Presencial'
        })).toBe(false);
    });

    // Teste 11: Diferenciação entre letras maiúsculas e minúsculas
    test('Rejeita modalidade com caixa diferente', () => {
        expect(validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'online'
        })).toBe(false);
    });

});
