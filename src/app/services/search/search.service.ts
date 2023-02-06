import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {

  }

  search(query: string){
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e22218241c5a4c46ba18fc479b9324d3&query=${query}&number=10`

    return this.http.get(apiUrl)
  }
}
