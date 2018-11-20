import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ConsumeService } from './consume.service';

describe('ConsumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumeService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ConsumeService], (service: ConsumeService) => {
    expect(service).toBeTruthy();
  }));
});
