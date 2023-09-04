import { Component, inject } from '@angular/core';
import { Choice } from './question';
import { QuizService } from './quiz.service';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeMenu = 0;
}

