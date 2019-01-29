import { TestBed } from '@angular/core/testing';

import { ForTestService } from './for-test.service';
import { HttpClientModule } from '@angular/common/http';

describe('ForTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ForTestService = TestBed.get(ForTestService);
    expect(service).toBeTruthy();
  });
});
