import { Component, inject } from '@angular/core';
import { Choice } from '../question';
import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  quizService: QuizService = inject(QuizService);

  question: Question[];
  answer: string[] = [];
  currentIndex = 0;

  showEachQuestion = true;

  constructor() {
    this.question = this.quizService.getQuizDataNoImage();
    this.answer = this.getAnswer();
    console.log(this.answer);
  }

  private getAnswer() {
    const allAnswers: string[] = [];

    for (const question of this.question) {
      const answersForQuestion = question.choices
        .filter((choice) => choice.isAnswer)
        .map((choice) => choice.text);

      allAnswers.push(...answersForQuestion);
    }

    return allAnswers;
  }


  isPreviousButtonDisabled() {
    return this.currentIndex === 0;
  }

  isNextButtonDisabled() {
    return this.currentIndex === this.question.length - 1;
  }

  onClickNextQuestion() {
    if (this.currentIndex < this.question.length) {
      this.currentIndex++;
    }
  }

  onClickPreviousQuestion() {
    if (this.currentIndex < this.question.length) {
      this.currentIndex--;
    }
  }
}
