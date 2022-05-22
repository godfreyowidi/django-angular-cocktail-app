import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cktail',
  templateUrl: './add-edit-cktail.component.html',
  styleUrls: ['./add-edit-cktail.component.css']
})
export class AddEditCktailComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cktail:any;
  CocktailId:string;
  CocktailName:string;
  Ingredient:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  IngredientList:any = [];

  ngOnInit(): void {
    this.loadIngredientList();
  }

  loadIngredientList() {
    this.service.getAllIngredientsNames().subscribe((data:any) => {
      this.IngredientList = data;

      this.CocktailId = this.cktail.CocktailId;
      this.CocktailName = this.cktail.CocktailName;
      this.Ingredient = this.cktail.Ingredient;
      this.PhotoFileName = this.cktail.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addCocktail() {
    var val = {CocktailId:this.CocktailId,
          CocktailName:this.CocktailName,
          Ingredient:this.Ingredient,
          PhotoFileName:this.PhotoFileName};

    this.service.addCocktail(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCocktail() {
    var val = {CocktailId:this.CocktailId,
          CocktailName:this.CocktailName,
          Ingredient:this.Ingredient,
          PhotoFileName:this.PhotoFileName};

    this.service.updateCocktail(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
