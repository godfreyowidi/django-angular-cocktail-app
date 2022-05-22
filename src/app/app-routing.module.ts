import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailComponent } from './cocktail/cocktail.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  {path: 'cocktail', component: CocktailComponent},
  {path: 'ingredient', component: IngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
