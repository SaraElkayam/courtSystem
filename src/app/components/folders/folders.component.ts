import { Component } from '@angular/core';
import { Folder } from '../../models/folder.model';
import { SearchOptions } from '../enums/searchOptions.enum';
import { FoldersService } from '../../services/folders.service.ts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-folders',
  standalone: false,
  
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.scss'
})
export class FoldersComponent {
  selectedValue:string=SearchOptions.all;
  folders:Folder[];
  placeholderSearch:string='הזן מספר תיק או שם של אחד הצדדים';
  SortOption:string;
  private foldersSubscription: Subscription;
  sortOrder: 'asc' | 'desc' = 'asc'; //to sort by asc and desc 


  constructor(private foldersService: FoldersService) {
    
  }

  ngOnInit() {
    this.foldersSubscription=this.foldersService.folders$.subscribe(folders => {
      this.folders = folders;
    });
  }
  ngOnDestroy() {
    if (this.foldersSubscription) {
      this.foldersSubscription.unsubscribe();
    }
  }
  sortFolders(){
    console.log("sort",this.SortOption,this.folders)
    this.folders.sort((a, b) => {
      let comparison = 0;
      switch (this.SortOption) {
        case 'folderNum':
          comparison = a.folderNum.localeCompare(b.folderNum);
          break;
        case 'fileOpeningDate':
          comparison = a.fileOpeningDate.getTime() - b.fileOpeningDate.getTime();
          break;
        default:
          break;
      }
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });
}
}
