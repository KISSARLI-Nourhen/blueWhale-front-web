import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTranslationComponent } from './product-translation.component';

describe('ProductTranslationComponent', () => {
  let component: ProductTranslationComponent;
  let fixture: ComponentFixture<ProductTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
