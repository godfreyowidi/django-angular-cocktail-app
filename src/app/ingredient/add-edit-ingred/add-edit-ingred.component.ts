import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ingred',
  templateUrl: './add-edit-ingred.component.html',
  styleUrls: ['./add-edit-ingred.component.css']
})
export class AddEditIngredComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ingred:any;
  IngredientId:string;
  IngredientName:string;

  ngOnInit(): void {
    this.IngredientId = this.ingred.IngredientId;
    this.IngredientName = this.ingred.IngredientName;
  }

  addIngredient() {
    var val = {IngredientId:this.IngredientId,
                IngredientName:this.IngredientName};
    this.service.addIngredient(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateIngredient() {
    var val = {IngredientId:this.IngredientId,
                IngredientName:this.IngredientName};
    this.service.updateIngredient(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
