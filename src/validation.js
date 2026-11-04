// Esta função extrai os campos do formulário
function validateLead({ name, email, phone, interest }) {
  
  // Cria um vetor que vai acumular os problemas encontrados na validação
  const errors = [];

  // Validação de nome: deve ser uma string com pelo menos 3 caracteres
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  }

// Validação de e-mail: deve ser uma string que corresponda a um padrão de e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }

  // Validação de telefone: Verifica se o telefone foi preenchido no formulário e se é diferente de uma string
  if (phone && typeof phone !== "string") {
    errors.push("Preencha o telefone corretamente.");
  }

  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];
  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return { valid: errors.length === 0, errors };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];
  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
