import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCktailComponent } from './show-cktail.component';

describe('ShowCktailComponent', () => {
  let component: ShowCktailComponent;
  let fixture: ComponentFixture<ShowCktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
