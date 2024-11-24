import {ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchOptions } from '../enums/searchOptions.enum';
 
@Component({
  selector: 'app-folders-search-panel',
  standalone: false,
  
  templateUrl: './folders-search-panel.component.html',
  styleUrl: './folders-search-panel.component.scss'
})
export class FoldersSearchPanelComponent {

  selectedValue: string; 
  searchOptions:String[];
 
 

  constructor() {
    this.searchOptions = Object.values(SearchOptions);  }

  onToggleChange(event: any) {
    const selectedValue = event.key; 

    switch (selectedValue) {
      case 'all':
        this.performAction1();
        break;
      case 'myFolders':
        this.performAction2();
        break;
      case 'openFolders':
        this.performAction3();
        break;
      default:
        this.performAction3();
     }
  }

  performAction1() {
    // Logic for Action 1
    console.log('Performing Action 1...');
  }

  performAction2() {
    // Logic for Action 2
    console.log('Performing Action 2...');
  }

  performAction3() {
    // Logic for Action 3
    console.log('Performing Action 3...');
  }
}
