import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component'
import { AboutComponent } from './+about';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RoutobjectComponent } from './+routobject';

@Component({
  moduleId: module.id,
  selector: 'mywebsite-app',
  templateUrl: 'mywebsite.component.html',
  styleUrls: ['mywebsite.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/about', component: AboutComponent},
  {path: '/routobject', component: RoutobjectComponent}
])

export class MywebsiteAppComponent {
  title = 'My Website';
  number = 2;
}
