import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/img/";

  constructor(private http:HttpClient) { }

  // Ingredients
  getIngredients():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/ingredient/");
  }

  addIngredient(val:any){
    return this.http.post(this.APIUrl + "/ingredient/", val);
  }

  updateIngredient(val:any){
    return this.http.put(this.APIUrl + "/ingredient/", val);
  }

  deleteIngredient(id:number){
    return this.http.delete(this.APIUrl + "/ingredient/" + id);
  }

  // Cocktails
  getCocktail():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/cocktail/");
  }

  addCocktail(val:any){
    return this.http.post(this.APIUrl + "/cocktail/", val);
  }

  updateCocktail(val:any){
    return this.http.put(this.APIUrl + "/cocktail/", val);
  }

  deleteCocktail(val:any){
    return this.http.delete(this.APIUrl + "/cocktail/" + val);
  }

  // Upload photo
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl + "/SaveFile/", val);
  }

  getAllIngredientsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/ingredient/");
  }
}
