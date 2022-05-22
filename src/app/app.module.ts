import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShowIngredComponent } from './ingredient/show-ingred/show-ingred.component';
import { AddEditIngredComponent } from './ingredient/add-edit-ingred/add-edit-ingred.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ShowCktailComponent } from './cocktail/show-cktail/show-cktail.component';
import { AddEditCktailComponent } from './cocktail/add-edit-cktail/add-edit-cktail.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    ShowIngredComponent,
    AddEditIngredComponent,
    CocktailComponent,
    ShowCktailComponent,
    AddEditCktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
