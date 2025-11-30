// src/data/creditsData.js
const credits = [
  {
    id: 1,
    name: "Crédito De Libre Inversión",
    type: "libre-inversion",
    icon: "💵",
    rateMonthly: 0.018, // 1.8% mensual
    amountRange: "$1M - $30M",
    amountMin: 1000000,
    amountMax: 30000000,
    termMax: 60,
    description: "Crédito para cubrir gastos personales, financiar proyectos o compras con flexibilidad. Ofrece aprobación rápida, cuotas ajustables y tasas competitivas para apoyar tus necesidades."
  },
  {
    id: 2,
    name: "Crédito Vehículo",
    type: "vehiculo",
    icon: "🚘",
    rateMonthly: 0.015,
    amountRange: "$10M - $80M",
    amountMin: 10000000,
    amountMax: 80000000,
    termMax: 72,
    description: "Crédito diseñado para comprar carro nuevo o usado, con plazos amplios y trámites sencillos. Permite financiar gran parte del valor del vehículo y ofrece tasas atractivas y accesibles."
  },
  {
    id: 3,
    name: "Crédito Vivienda",
    type: "vivienda",
    icon: "🏘️",
    rateMonthly: 0.009,
    amountRange: "$20M - $500M",
    amountMin: 20000000,
    amountMax: 500000000,
    termMax: 240,
    description: "Crédito para comprar vivienda nueva o usada, con plazos largos y condiciones flexibles. Brinda opciones de financiación para diversos presupuestos y acompañamiento en el proceso."
  },
  {
    id: 4,
    name: "Crédito Educativo",
    type: "educativo",
    icon: "📚",
    rateMonthly: 0.012,
    amountRange: "$2M - $40M",
    amountMin: 2000000,
    amountMax: 40000000,
    termMax: 48,
    description: "Crédito para financiar estudios técnicos, universitarios o de posgrado. Cubre matrícula y otros gastos académicos, con plazos cómodos y tasas que facilitan el desarrollo profesional."
  },
  {
    id: 5,
    name: "Crédito Empresarial",
    type: "empresarial",
    icon: "🏛️",
    rateMonthly: 0.016,
    amountRange: "$5M - $150M",
    amountMin: 5000000,
    amountMax: 150000000,
    termMax: 120,
    description: "Crédito para impulsar negocios mediante capital de trabajo o inversión en equipos. Ofrece montos competitivos, aprobación ágil y planes flexibles para fortalecer la operación."
  },
  {
    id: 6,
    name: "Crédito De Consumo",
    type: "consumo",
    icon: "💳",
    rateMonthly: 0.021,
    amountRange: "$500K - $20M",
    amountMin: 500000,
    amountMax: 20000000,
    termMax: 48,
    description: "Crédito para cubrir gastos personales inmediatos, con desembolso rápido y cuotas cómodas. Ideal para compras, emergencias o necesidades del día a día, con trámites simples y ágiles."
  }
];

export default credits;
