import { TestBed } from '@angular/core/testing';

import { ImportExportServiceService } from './import-export-service.service';

describe('ImportExportServiceService', () => {
  let service: ImportExportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportExportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
