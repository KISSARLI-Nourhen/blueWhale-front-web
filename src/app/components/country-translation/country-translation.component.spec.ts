import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTranslationComponent } from './country-translation.component';

describe('CountryTranslationComponent', () => {
  let component: CountryTranslationComponent;
  let fixture: ComponentFixture<CountryTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
