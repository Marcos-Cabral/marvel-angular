import { TestBed } from '@angular/core/testing';

import { CompraServiceService } from './compra-service.service';

describe('CompraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompraServiceService = TestBed.get(CompraServiceService);
    expect(service).toBeTruthy();
  });
});
