// Importação de módulos
const {validateLead} = require("../src/validation");

// Agrupamento de testes unitários para a função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

   test("Verifica se o nome tem 3 caracteres", () => {
      // Passamos um nome válido
      const result = validateLead({"name": "João", email: "email@email.com"});
      expect(result.errors.length).toBe(0);
      expect(result.valid).toBe(true);
   });
      
   test("Verifica nome inválido", () => {
      // Passamos um nome inválido com apenas 3 caracteres e guardamos o resultado na constante "result"
      const result = validateLead({"name": "J", email: "email@email.com"});
      expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
   }); 

});