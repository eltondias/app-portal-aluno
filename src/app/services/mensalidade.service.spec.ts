import { TestBed } from '@angular/core/testing';

import { MensalidadeService } from './mensalidade.service';

describe('MensalidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensalidadeService = TestBed.get(MensalidadeService);
    expect(service).toBeTruthy();
  });
});
