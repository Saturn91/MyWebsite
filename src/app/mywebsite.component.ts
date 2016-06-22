import { Component } from '@angular/core';
import { AppComponent } from './+app';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mywebsite-app',
  templateUrl: 'mywebsite.component.html',
  styleUrls: ['mywebsite.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/app', component: AppComponent}
])
export class MywebsiteAppComponent {
  title = 'mywebsite works!';
}
