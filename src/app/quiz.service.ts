import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = "http://localhost:3000/questions";
  Question: Question[] = [];

  constructor() { }

  private shuffleArray(array: Question[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  async getQuizDataNoImage() {
    try {
      const res = await fetch(this.url);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      
      this.Question = await res.json();
      const questionsNoImage: Question[] = this.Question.filter(({ image }) => image === '');

      return this.shuffleArray(questionsNoImage);

    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }

  async getQuizData() {
    try {
      const res = await fetch(this.url);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      
      this.Question = await res.json();

      return this.shuffleArray(this.Question);

    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }  
}
