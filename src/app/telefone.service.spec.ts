import { TestBed, inject } from '@angular/core/testing';

import { TelefoneService } from './telefone.service';

describe('TelefoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelefoneService]
    });
  });

  it('should be created', inject([TelefoneService], (service: TelefoneService) => {
    expect(service).toBeTruthy();
  }));
});
