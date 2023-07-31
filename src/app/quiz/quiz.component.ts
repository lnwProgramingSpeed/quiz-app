import { Component, inject } from '@angular/core';
import { Choice } from '../question';
import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'] 
})
export class QuizComponent {
  quizService: QuizService = inject(QuizService);

  question: Question[];
  currentIndex = 0;
  score = 0;
  isEnd = false;
  click = new Audio();
  bg = new Audio();

  winner='';

  constructor() {
    this.question = this.quizService.getQuizData();
    this.click.src = '../../assets/audio/explosion.wav';
    this.onClickRestart();
  }

  onClickChoice(Choice: Choice) {
    this.clickSound();

    if (this.currentIndex < this.question.length) {
      console.log(this.currentIndex);
      console.log(this.question.length);
      this.currentIndex++;
    }
    if (this.currentIndex == this.question.length) {
      this.isEnd = true;
      this.checkScore(this.score);
    }
    return Choice.isAnswer ? this.score += 1 : this.score += 0;
  }

  private checkScore(score: number){
    if(score == this.question.length && score != this.question.length){
      this.winner = '../../assets/images/smart.jpg'
    }else if(score > this.question.length/2){
      this.winner = '../../assets/images/ohMyGwab.jpg'
    } else {
      this.winner = '../../assets/images/joker.jpg'
    }
  }

  private clickSound() {
    this.click.load();
    this.click.addEventListener('canplaythrough', () => {
      this.click.play();
    });
  }

  onClickRestart(){
    this.score = 0;
    this.restartGame();
  }

  private restartGame() {
    this.currentIndex = 0;
    this.isEnd = false;
  }
}

