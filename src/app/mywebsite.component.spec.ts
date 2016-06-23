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

  it('should have as title \'My Website\'',
      inject([MywebsiteAppComponent], (app: MywebsiteAppComponent) => {
    expect(app.title).toEqual('My Website');
  }));
});

describe('my own test', function(){

  it('number schould be positive',
    inject([MywebsiteAppComponent], (app: MywebsiteAppComponent) => {
      expect(app).toBeGreaterThan(-1);
    }));

})
