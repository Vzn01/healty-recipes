import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=e22218241c5a4c46ba18fc479b9324d3`;

    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/{id}/similar?apiKey=e22218241c5a4c46ba18fc479b9324d3`;

    return this.http.get(apiUrl);
  }
}
