import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCktailComponent } from './add-edit-cktail.component';

describe('AddEditCktailComponent', () => {
  let component: AddEditCktailComponent;
  let fixture: ComponentFixture<AddEditCktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
