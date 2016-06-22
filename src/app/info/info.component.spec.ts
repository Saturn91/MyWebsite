/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InfoComponent } from './info.component';

describe('Component: Info', () => {
  it('should create an instance', () => {
    let component = new InfoComponent();
    expect(component).toBeTruthy();
  });
});
