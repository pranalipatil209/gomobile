/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedataService } from './sharedata.service';

describe('SharedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedataService]
    });
  });

  it('should ...', inject([SharedataService], (service: SharedataService) => {
    expect(service).toBeTruthy();
  }));
});
