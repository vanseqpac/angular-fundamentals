import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <p>Age: {{ age - 10 }} 😉</p>
    <p>Follow me: {{ twitter }}</p>
    <p>Favorite Food: {{ favFood }}</p>
    <p>Favorite Place to go on vacay: {{ favPlace }}</p>
    <p>Best Friend: {{ bestFriend }}</p>
  `
})
export class AppComponent {
  name = 'Brian Love';
  age = 40;
  twitter = '@brian_love';

  // 1. add your favorite food
  // 2. add your favorite place to go on vacation
  // 3. add the name of your best friend

  favFood = 'Schezuan noodles'
  favPlace = 'Secluded Island'
  bestFriend = 'Someone who understands me!'
}
