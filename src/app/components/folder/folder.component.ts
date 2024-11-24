import { Component, Input } from '@angular/core';
import { Folder } from '../../models/folder.model';

@Component({
  selector: 'app-folder',
  standalone: false,
  
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent {
@Input()
folder:Folder;

}
