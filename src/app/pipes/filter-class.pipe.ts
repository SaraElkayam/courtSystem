import { Pipe, PipeTransform } from '@angular/core';
import { Folder } from '../models/folder.model';

@Pipe({
  name: 'filterClass'
})
export class FilterClassPipe implements PipeTransform {
judgeIdFromLogin:number=1122334455;//should implement it with store when we have log in page
  transform(arr: Folder[], searchoption: string):Folder[]{
   
    switch (searchoption) {
        case 'all':
        return arr;     
         break;
        case 'myFolders': 
            return arr.filter(item => 
                item.judgeId==this.judgeIdFromLogin)        
          break;
        case 'activeFolders':
          return arr.filter(item => 
            item.isOpen)
          break;
          case 'closeFolders':
             return arr.filter(item => 
                !item.isOpen)    
            break;
        default:
            return arr;        
        }
    
  }

}