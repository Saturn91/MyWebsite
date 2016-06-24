import { Component } from '@angular/core';
import { AboutComponent } from './+about';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RoutobjectComponent } from './+routobject';
import { CreatePersonComponent } from './+create-person';

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
  {path: '/routobject', component: RoutobjectComponent},
  {path: '/createPerson', component: CreatePersonComponent}
])

export class MywebsiteAppComponent {

  title = 'My Website';
  number = 2;
}
