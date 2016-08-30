import { Component, Inject } from '@angular/core';
import { BlogItem } from './components/blogitem.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BlogItem]
})

export class AppComponent {
  title = '...loaded.';
}
