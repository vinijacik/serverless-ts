export default {
    type: "object",
    properties: {
      fullName: { type: "string" },
      email: { type: "string" },
      birthDate: { type: "string" },
      cpf: { type: "string" },
      cep: { type: "string" },
      address: { type: "string" },
      addressNumber: { type: "string" },
      district: { type: "string" },
      city: { type: "string" },
      state: { type: "string" },
      country: { type: "string" },
      addressComplement: { type: "string" },
    },
} as const;
