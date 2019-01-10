// TODO - replace all types with constants (i.e. toggle, date, dropdown)

const DEFAULT_DATE = new Date();

export const firstQuestion = [
  {
    question: "Have you had your baby?",
    type: "toggle",
    name: "hadBabyYetQ0",
    defaultAnswer: "no"
  }
];

// disability related questions
export const disabilityQuestions = [
  {
    question: "Are you currently out on disability?",
    type: "toggle",
    name: "disabilityQ0",
    defaultAnswer: "no"
  },
  // only need next question if currently on disability
  {
    question: "When did you go out on disability?",
    type: "date",
    name: "disabilityQ1",
    defaultAnswer: DEFAULT_DATE
  }
];

// baby due date and delivery questions
export const noBabyYetQuestions = [
  {
    question: "What is your expected due date?",
    type: "date",
    name: "noBabyYetQ0",
    defaultAnswer: DEFAULT_DATE
  },
  {
    question: "What is your planned delivery method?",
    type: "dropdown",
    name: "noBabyYetQ1",
    defaultAnswer: "vaginal"
  }
];

// baby already born questions
export const babyAlreadyBornQuestions = [
  {
    question: "When did you have your baby?",
    type: "date",
    name: "babyBornQ0",
    defaultAnswer: DEFAULT_DATE
  },
  {
    question: "What was your delivery method?",
    type: "dropdown",
    name: "babyBornQ1",
    defaultAnswer: "vaginal"
  },
  {
    question:
      "Do you expect to have an extension on disability beyond the standard 6/8 weeks for vaginal/C-section delivery?",
    type: "toggle",
    name: "babyBornQ2",
    defaultAnswer: "no"
  }
];

// employer related questions
export const employerRelatedQuestions = [
  {
    question: "Have you worked at your employer for at least a year?",
    type: "toggle",
    name: "employerQ0",
    defaultAnswer: "no"
  },
  {
    question:
      "Have you worked for more than 1250 hours at your current employer?",
    type: "toggle",
    name: "employerQ1",
    defaultAnswer: "no"
  },
  {
    question: "Does your company have more than 50 employees?",
    type: "toggle",
    name: "employerQ2",
    defaultAnswer: "no"
  },
  {
    question: "Does your company have more than 20 employees?",
    type: "toggle",
    name: "employerQ3",
    defaultAnswer: "no"
  },
  {
    question: "Does your company have more than 50 employees?",
    type: "toggle",
    name: "employerQ4",
    defaultAnswer: "no"
  }
];

export const allQuestions = {
  firstQuestion,
  disabilityQuestions,
  noBabyYetQuestions,
  babyAlreadyBornQuestions,
  employerRelatedQuestions
};
