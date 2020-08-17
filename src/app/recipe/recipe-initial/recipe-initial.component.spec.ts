import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInitialComponent } from './recipe-initial.component';

describe('RecipeInitialComponent', () => {
  let component: RecipeInitialComponent;
  let fixture: ComponentFixture<RecipeInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
