import { Component, Inject } from '@angular/core';
import { BlogItems } from './components/blogitems.component';
import { SmashWrapperService } from './smash-wrapper.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [SmashWrapperService],
  directives: [BlogItems]
})

export class AppComponent {

    title = '...loaded.';

    constructor( private smashService: SmashWrapperService) {

      // var test = smashService.getBlogItems();

    }


}
