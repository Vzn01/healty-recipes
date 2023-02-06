import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }


  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=e22218241c5a4c46ba18fc479b9324d3&number=${take}`;

    return this.http.get(apiUrl);
  }
}
