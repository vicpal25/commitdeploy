import { Component, Inject } from '@angular/core';
import { BlogItems } from './components/blogitems.component';
import { SmashService } from './services/smash.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [SmashService],
  directives: [BlogItems]
})

export class AppComponent {

    title = '...loaded.';

    constructor( private smashService: SmashService) {


      var test = smashService.getBlogItems();

    }


}
