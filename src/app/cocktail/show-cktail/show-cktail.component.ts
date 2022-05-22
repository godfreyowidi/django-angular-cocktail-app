import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cktail',
  templateUrl: './show-cktail.component.html',
  styleUrls: ['./show-cktail.component.css']
})
export class ShowCktailComponent implements OnInit {

  constructor(private service:SharedService) { }

  CocktailList: any = [];

  ModalTitle:string;
  ActivateAddEditCktailComp:boolean=false;
  cktail:any;

  ngOnInit(): void {
    this.refreshCocktails();
  }

  addClick() {
    this.cktail = {
      CocktailId:0,
      CocktailName:""
    }
    this.ModalTitle="Add Cocktail";
    this.ActivateAddEditCktailComp=true;
  }

  editClick(item) {
    this.cktail = item;
    this.ModalTitle="Edit Cocktail";
    this.ActivateAddEditCktailComp=true;
  }

  closeClick() {
    this.ActivateAddEditCktailComp=false;
    this.refreshCocktails();
  }

  deleteClick(item) {
    if(confirm("Are you sure you want to delete this cocktail?")) {
      this.service.deleteCocktail(item.CocktailId).subscribe(data => {
        alert(data.toString());
        this.refreshCocktails();
      })
    }
  }

  refreshCocktails() {
    this.service.getCocktail().subscribe(data => {
      this.CocktailList = data;
    });
  }
}
