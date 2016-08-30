/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SmashWrapperService } from './smash-wrapper.service';

describe('Service: SmashWrapper', () => {
  beforeEach(() => {
    addProviders([SmashWrapperService]);
  });

  it('should ...',
    inject([SmashWrapperService],
      (service: SmashWrapperService) => {
        expect(service).toBeTruthy();
      }));
});
