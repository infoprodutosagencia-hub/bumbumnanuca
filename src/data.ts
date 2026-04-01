export type Question = {
  title?: string;
  question: string;
  context?: string;
  options: string[];
};

export const questions: Record<string, Question> = {
  q1: {
    title: "Vamos começar! Responda atentamente!",
    question: "Atualmente você está satisfeita com o tamanho e formato do seu bumbum?",
    options: ["☹️ Estou Insatisfeita", "😀 Estou satisfeita, mas quero melhorar"]
  },
  q2: {
    question: "O que mais te incomoda ao olhar no espelho?",
    options: ["😩 Meu bumbum pequeno ou sem volume.", "😢 A falta de firmeza ou definição.", "😁 Tudo está bem, só quero melhorar ainda mais"]
  },
  q3: {
    question: "Você já desistiu de usar roupas como vestidos justos ou biquínis por não se sentir confiante?",
    options: ["🤯 Sim, várias vezes", "🥹 Algumas vezes, mas tento contornar.", "😁 Não, isso não é um problema para mim."]
  },
  q4: {
    question: "Você acredita que é possível transformar seu bumbum com treinos rápidos e direcionados, feitos em casa?",
    options: ["Sim, acredito que é possível.", "Talvez, mas nunca vi algo funcionar para mim.", "Me sentir mais saudável e com mais energia", "Não tenho certeza, mas estou disposta a tentar."]
  },
  q5: {
    question: "Se existisse um método testado e aprovado que combinasse treinos curtos com um plano alimentar simples, você toparia experimentar?",
    options: ["😁 Sim, com certeza.", "🤨 Dependeria dos resultados prometidos.", "😏 Talvez, se for algo acessível e fácil de fazer."]
  },
  q6: {
    question: "Quantos minutos por dia você consegue dedicar ao seu treino?",
    options: ["🕰 Menos de 10 minutos.", "🕰 Entre 10 e 20 minutos", "🕰 Mais de 20 minutos."]
  },
  q7: {
    question: "Com que frequência você conseguiria treinar por semana?",
    options: ["3 vezes.", "4 a 5 vezes.", "Todos os dias."]
  },
  q8: {
    question: "Quantas refeições você faz por dia normalmente?",
    context: "Esta é a chave do seu metabolismo! Nunzi descobriu que 90% das pessoas fazem isso errado e por isso não conseguem empinar o bumbum.",
    options: ["1 a 2 refeições", "3 refeições básicas ao dia", "4 a 5 refeições", "Como várias vezes"]
  },
  q12: {
    question: "Você acredita que está pronta para transformar seu corpo e sua autoestima de uma vez por todas?",
    options: ["Sim, estou pronta.", "Estou quase lá, só preciso de um empurrão.", "Preciso de mais motivação para começar."]
  },
  q14: {
    question: "Qual seu maior obstáculo atual?",
    context: "Conhecer seu sabotador interno é fundamental. Coach Nunzi criou estratégias específicas para vencer cada um desses obstáculos.",
    options: ["Falta de motivação constante", "Ansiedade e compulsão alimentar", "Rotina corrida sem tempo", "Não sei por onde começar", "Baixa autoestima me sabota"]
  },
  q15: {
    question: "Está pronta para empinar seu bumbum em até 28 dias?",
    options: ["SIM, ESTOU 100% COMPROMETIDA", "ABSOLUTAMENTE, VOU DAR O MEU MÁXIMO", "COM CERTEZA, QUERO COMEÇAR HOJE", "AINDA ESTOU PENSANDO"]
  }
};
