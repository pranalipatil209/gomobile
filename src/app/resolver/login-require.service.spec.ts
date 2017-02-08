/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginRequireResolver } from './login-require.service';

describe('LoginRequireResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRequireResolver]
    });
  });

  it('should ...', inject([LoginRequireResolver], (service: LoginRequireResolver) => {
    expect(service).toBeTruthy();
  }));
});
