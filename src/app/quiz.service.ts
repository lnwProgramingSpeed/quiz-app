import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  Question: Question[] = [
    {
      id: 1,
      text: 'Who is Gay',
      image: '../assets/images/gay.jpg',
      choices: [
        { id: 1, text: 'Latte', isAnswer: false },
        { id: 2, text: 'angle aerk', isAnswer: false },
        { id: 3, text: 'Head cancer', isAnswer: false },
        { id: 4, text: 'All choices are correct', isAnswer: true }
      ]
    },
    {
      id: 2,
      text: 'The taobin destroyer',
      image: '../assets/images/taobin.jpg',
      choices: [
        { id: 1, text: 'Head cancer', isAnswer: true },
        { id: 2, text: 'camo', isAnswer: false },
        { id: 3, text: 'lnwFlash', isAnswer: false },
        { id: 4, text: 'All choices are correct', isAnswer: false }
      ]
    },
    {
      id: 3,
      text: 'The undawn enjoyers',
      image: '../assets/images/undawn.jpg',
      choices: [
        { id: 1, text: 'Pain1811', isAnswer: false },
        { id: 2, text: 'angle aerk', isAnswer: true },
        { id: 3, text: 'Head cancer', isAnswer: false },
        { id: 4, text: 'All choices are correct', isAnswer: false }
      ]
    },
    {
      id: 4,
      text: 'The one have no car',
      image: '../assets/images/no car.jpeg',
      choices: [
        { id: 1, text: 'Latte', isAnswer: false },
        { id: 2, text: 'angle aerk', isAnswer: false },
        { id: 3, text: 'Head cancer', isAnswer: false },
        { id: 4, text: 'lnwflash', isAnswer: true }
      ]
    },
    {
      id: 5,
      text: 'bro who is gay but getting girl',
      image: '../assets/images/girl.jpg',
      choices: [
        { id: 1, text: 'Latte', isAnswer: false },
        { id: 2, text: 'Pain1811', isAnswer: false },
        { id: 3, text: 'camo', isAnswer: false },
        { id: 4, text: 'All choices are correct', isAnswer: true }
      ]
    },
    {
      id: 6,
      text: 'The undawn architecture',
      image: '../assets/images/architecture.jpg',
      choices: [
        { id: 1, text: 'Pain1811', isAnswer: false },
        { id: 2, text: 'angle aerk', isAnswer: false },
        { id: 3, text: 'Head cancer', isAnswer: false },
        { id: 4, text: 'camo', isAnswer: true }
      ]
    },
    {
      id: 7,
      text: '1 + 1',
      image: '',
      choices: [
        { id: 1, text: '2', isAnswer: false },
        { id: 2, text: '10', isAnswer: false },
        { id: 3, text: '11', isAnswer: false },
        { id: 4, text: ' \'1+1\' ', isAnswer: true }
      ]
    },
    {
      id: 8,
      text: 'Why don\'t scientists trust atoms?',
      image: '',
      choices: [
        { id: 1, text: ' Because they make up everything.', isAnswer: true },
        { id: 2, text: 'Because they\'re always making bad jokes.', isAnswer: false },
        { id: 3, text: 'Because they never pay their bills on time.', isAnswer: false },
        { id: 4, text: 'Because they\'re too small to be reliable.', isAnswer: false }
      ]
    },
    {
      id: 9,
      text: 'Why was the math book sad?',
      image: '',
      choices: [
        { id: 1, text: 'Because it had too many problems.', isAnswer: true },
        { id: 2, text: 'Because it was missing its cover.', isAnswer: false },
        { id: 3, text: 'Because it didn\'t have any friends.', isAnswer: false },
        { id: 4, text: 'Because it couldn\'t solve its own equations.', isAnswer: false }
      ]
    },
    {
      id: 10,
      text: 'What do you call fake spaghetti?',
      image: '',
      choices: [
        { id: 1, text: 'An impasta.', isAnswer: true },
        { id: 2, text: 'A noodle doppelgänger.', isAnswer: false },
        { id: 3, text: 'Spag-fake-ti.', isAnswer: false },
        { id: 4, text: 'A pasta prank.', isAnswer: false }
      ]
    },
  ];

  constructor() { }

  private shuffleArray(array: Question[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  getQuizDataNoImage() {
    const questionsNoImage: Question[] = this.Question.filter(({ image }) => image === '');
    return this.shuffleArray(questionsNoImage);
  }

  getQuizData() {
    return this.shuffleArray(this.Question);
  }
}
