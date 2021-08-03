import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReferenceComponent } from './table-reference.component';

describe('TableReferenceComponent', () => {
  let component: TableReferenceComponent;
  let fixture: ComponentFixture<TableReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
