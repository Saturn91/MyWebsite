import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component'

@Component({
  moduleId: module.id,
  selector: 'mywebsite-app',
  templateUrl: 'mywebsite.component.html',
  styleUrls: ['mywebsite.component.css'],
  directives: [InfoComponent],
})

export class MywebsiteAppComponent {
  title = 'mywebsite works!';
}
