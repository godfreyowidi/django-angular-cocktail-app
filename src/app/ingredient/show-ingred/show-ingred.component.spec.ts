import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIngredComponent } from './show-ingred.component';

describe('ShowIngredComponent', () => {
  let component: ShowIngredComponent;
  let fixture: ComponentFixture<ShowIngredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIngredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIngredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
