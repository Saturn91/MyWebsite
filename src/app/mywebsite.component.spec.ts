import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MywebsiteAppComponent } from '../app/mywebsite.component';

beforeEachProviders(() => [MywebsiteAppComponent]);

describe('App: Mywebsite', () => {
  it('should create the app',
      inject([MywebsiteAppComponent], (app: MywebsiteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mywebsite works!\'',
      inject([MywebsiteAppComponent], (app: MywebsiteAppComponent) => {
    expect(app.title).toEqual('mywebsite works!');
  }));
});
