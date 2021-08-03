import { TestBed } from '@angular/core/testing';
import { TableReferenceService } from './table-reference.service';

describe('TableReferenceService', () => {
  let service: TableReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
