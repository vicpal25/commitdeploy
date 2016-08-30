import { Component, Inject } from '@angular/core';
import { BlogItems } from './components/blogitems.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BlogItems]
})

export class AppComponent {
  title = '...loaded.';
}
