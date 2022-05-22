import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIngredComponent } from './add-edit-ingred.component';

describe('AddEditIngredComponent', () => {
  let component: AddEditIngredComponent;
  let fixture: ComponentFixture<AddEditIngredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIngredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIngredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
