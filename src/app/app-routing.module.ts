import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/learn', pathMatch: 'full' }, // Redirect to the 'learn' component by default
  { path: '**', redirectTo: '/learn' },// Redirect to the 'learn' component for any unknown URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
