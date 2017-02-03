/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreventUnsavedChangedGuardService } from './prevent-unsaved-changed-guard.service';

describe('PreventUnsavedChangedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventUnsavedChangedGuardService]
    });
  });

  it('should ...', inject([PreventUnsavedChangedGuardService], (service: PreventUnsavedChangedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
