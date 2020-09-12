export default {
  quizList: [
    {
      id: 1,
      question: "Сколько алмазов в мире minecraft?",
      answerList: [
        {
          textContent: "Столько, сколько найдет Ортем",
          route: "/questions/question-2",
          imageContent: `${process.env.BASE_URL}images/diamonds-two.png`
        },
        {
          textContent: "12.5 триллионов",
          route: "/questions/question-2",
          imageContent: `${process.env.BASE_URL}images/many-diamonds.png`
        },
        {
          textContent: "я шо помню??",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/question.svg`
        },
        {
          textContent: "верхний вариант",
          route: "/questions/question-2",
          imageContent: `${process.env.BASE_URL}images/arrow.svg`
        }
      ]
    },
    {
      id: 2,
      question: "Почему гену не взяли в армию",
      answerList: [
        {
          textContent: "Дебилов не берут",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/pepe.png`
        },
        {
          textContent: "Из за здоровья",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/heart.svg`
        },
        {
          textContent: "Слишком крутой",
          route: "/questions/question-3",
          imageContent: `${process.env.BASE_URL}images/swag-glasses.png`
        },
        {
          textContent: "Гена - гусь",
          route: "/questions/question-3",
          imageContent: `${process.env.BASE_URL}images/goose-gena.png`
        }
      ]
    },
    {
      id: 3,
      question: "почему берут Максима",
      answerList: [
        {
          textContent: "Потому что дебилов берут",
          route: "/questions/question-4",
          imageContent: `${process.env.BASE_URL}images/pepe.png`
        },
        {
          textContent: "Потому что Максим здоровый",
          route: "/questions/question-4",
          imageContent: `${process.env.BASE_URL}images/heart.svg`
        },
        {
          textContent: "Потому что",
          route: "/questions/question-4",
          imageContent: `${process.env.BASE_URL}images/opex.png`
        },
        {
          textContent:
            "*здесь была не смешная шутка от макса про ситуацию в Беларуси*",
          route: "/questions/question-4",
          imageContent: null
        }
      ]
    },
    {
      id: 4,
      question: "Как пройти амнезию",
      answerList: [
        {
          textContent: "Бегите-не бегите",
          route: "/questions/question-5",
          imageContent: `${process.env.BASE_URL}images/peepo.gif`
        },
        {
          textContent: "Умереть в комнате с пытками",
          route: "/questions/question-5",
          imageContent: `${process.env.BASE_URL}images/amnesia.jpeg`
        },
        {
          textContent: "Собрать все бочки",
          route: "/questions/question-5",
          imageContent: `${process.env.BASE_URL}images/amnesia-barrels.jpeg`
        },
        {
          textContent: "Спросить Ортема",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/thinking.gif`
        }
      ]
    },
    {
      id: 5,
      question: "Твой вариант?",
      answerList: [
        {
          textContent: "42",
          route: "/questions/question-6",
          imageContent: `${process.env.BASE_URL}images/42.png`
        },
        {
          textContent: "Апельсин",
          route: "/questions/question-6",
          imageContent: `${process.env.BASE_URL}images/orange.svg`
        },
        {
          textContent: "Клара и кларнет",
          route: "/questions/question-6",
          imageContent: `${process.env.BASE_URL}images/clarinet.png`
        },
        {
          textContent: "каво и шо",
          route: "/questions/question-6",
          imageContent: `${process.env.BASE_URL}images/sho.jpg`
        }
      ]
    },
    {
      id: 6,
      question: "Открыли второй джин, это время для",
      answerList: [
        {
          textContent: "Раз раз раз это хардбас",
          route: "/pre-final",
          imageContent: `${process.env.BASE_URL}images/pepedance.gif`
        },
        {
          textContent: "'Гена блять не прыгай' ©",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/jump.svg`
        },
        {
          textContent: "Двигать бёдрами",
          route: "/pre-final",
          imageContent: `${process.env.BASE_URL}images/jojodance.gif`
        },
        {
          textContent:
            "Танец около мангала(сорямба, Гена, так и не нашел тот видос :C)",
          route: "/pre-final",
          imageContent: null
        }
      ]
    },
    {
      id: 7,
      question: "Попросили купить курочку. Что нужно сделать?",
      answerList: [
        {
          textContent: " Купить сырный соус",
          route: "/final",
          imageContent: `${process.env.BASE_URL}images/cheese.png`
        },
        {
          textContent: "Купить курочку",
          route: "/lose",
          imageContent: `${process.env.BASE_URL}images/meat.svg`
        },
        {
          textContent: "Соус сырный купить",
          route: "/final",
          imageContent: `${process.env.BASE_URL}images/cheese.png`
        },
        {
          textContent: "Сырный соус купить",
          route: "/final",
          imageContent: `${process.env.BASE_URL}images/cheese.png`
        }
      ]
    }
  ]
};
