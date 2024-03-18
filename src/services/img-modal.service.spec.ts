import { TestBed } from '@angular/core/testing';

import { ImgModalService } from './img-modal.service';

describe('ImgModalService', () => {
  let service: ImgModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
