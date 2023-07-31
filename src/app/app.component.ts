import { Component } from '@angular/core';
import { question } from './quiz_data';
import { Choice } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = question;
  currentIndex = 0;
  score = 0;

  onClickChoice(Choice: Choice) {
    if (this.currentIndex < this.question.length - 1) {
      console.log(this.currentIndex);
      console.log(this.question.length);
      this.currentIndex++;
    }
    return Choice.isAnswer ? this.score += 1 : this.score += 0;
  }
}
