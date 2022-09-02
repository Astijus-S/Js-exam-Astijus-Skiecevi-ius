/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}
let movieOne = new Movie("Fast and furious 25", "J. J. Abrams", 25000);
let movieTwo = new Movie("Return to Shawshank", "Steven Seagal", 999999999999);
console.log(movieOne);
console.log(movieTwo);
console.log(movieOne.wasExpensive());
console.log(movieTwo.wasExpensive());
