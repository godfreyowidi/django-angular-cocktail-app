import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-ingred',
  templateUrl: './show-ingred.component.html',
  styleUrls: ['./show-ingred.component.css']
})
export class ShowIngredComponent implements OnInit {

  constructor(private service:SharedService) { }

  IngredientList: any = [];

  ModalTitle:string;
  ActivateAddEditIngredComp:boolean=false;
  ingred:any;

  IngredientIdFilter:string="";
  IngredientNameFilter:string="";
  IngredientListWithoutFilter:any = [];


  ngOnInit(): void {
    this.refreshIngredients();
  }

  addClick() {
    this.ingred = {
      IngredientId:0,
      IngredientName:""
    }
    this.ModalTitle="Add Ingredient";
    this.ActivateAddEditIngredComp=true;
  }

  editClick(item) {
    this.ingred = item;
    this.ModalTitle="Edit Ingredient";
    this.ActivateAddEditIngredComp=true;
  }

  closeClick() {
    this.ActivateAddEditIngredComp=false;
    this.refreshIngredients();
  }

  deleteClick(item) {
    if(confirm("Are you sure you want to delete this ingredient?")) {
      this.service.deleteIngredient(item.IngredientId).subscribe(data => {
        alert(data.toString());
        this.refreshIngredients();
      })
    }
  }

  refreshIngredients() {
    this.service.getIngredients().subscribe(data => {
      this.IngredientList = data;
      this.IngredientListWithoutFilter = data;
    });
  }

  FilterMethod() {
    var IngredientIdFilter = this.IngredientIdFilter;
    var IngredientNameFilter = this.IngredientNameFilter;

    this.IngredientList = this.IngredientListWithoutFilter.filter(function(e){
      return e.IngredientId.toString().toLowerCase().includes(
              IngredientIdFilter.toString().trim().toLowerCase())
      &&
            e.IngredientName.toString().toLowerCase().includes(
              IngredientNameFilter.toString().trim().toLowerCase());
    });
  }

  sortResult(prop,asc) {
    this.IngredientList = this.IngredientListWithoutFilter.sort(function(a,b){
      if(asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    })
  }
}
