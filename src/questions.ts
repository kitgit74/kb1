import { Question } from './types';

export const questions: Question[] = [
  {
    id: "1",
    group: "A1",
    text: "Cos'é una corsia riservata?",
    options: [
      "una corsia di marcia destinata alla circolazione esclusiva di una o alcune categorie di veicoli",
      "una parte della carreggiata in cui non é possibile circolare",
      "una corsia destinata al solo accesso dei frontisti"
    ],
    correctAnswer: 0
  },
  {
    id: "2",
    group: "A1", 
    text: "Cos'é una zona a traffico limitato?",
    options: [
      "un'area in cui accesso e circolazione veicolare sono limitati ad ore prestabilite o a particolari categorie di utenti o di veicoli",
      "una parte di una piazza destinata prevalentemente al parcheggio",
      "una parte della strada riservata a mezzi pubblici e di emergenza"
    ],
    correctAnswer: 0
  },
  {
    id: "3",
    group: "A1",
    text: "E' possibile installare su veicoli adibiti a servizi pubblici non di linea scritte o insegne pubblicitarie luminose?",
    options: [
      "si",
      "no",
      "solo nei casi previsti dal regolamento comunale di esercizio"
    ],
    correctAnswer: 1
  },
  {
    id: "4",
    group: "A1",
    text: "E' possibile installare su veicoli adibiti a servizi pubblici non di linea scritte o insegne pubblicitarie rifrangenti?",
    options: [
      "si",
      "no", 
      "si, solo nei casi previsti dal regolamento di esecuzione del codice della strada"
    ],
    correctAnswer: 2
  },
  {
    id: "5",
    group: "A1",
    text: "Quale é la sanzione per chi installa su veicoli adibiti a servizi pubblici non di linea scritte o insegne pubblicitarie luminose o rifrangenti in difformita di quanto eventualmente previsto o possibile?",
    options: [
      "una sanzione amministrativa",
      "una multa",
      "il sequestro del veicolo"
    ],
    correctAnswer: 0
  }
];