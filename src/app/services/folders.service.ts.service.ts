import { Injectable } from '@angular/core';
import { Folder } from '../models/folder.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
folders$: Observable<Folder[]>;
private folders: Folder[]; 

constructor() {
    this.folders= [
      {folderNum: "108/2024", aboutDescription:"בדיקת שמירת החלטה 3", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2023", fileOpeningDate:new Date(),closeDiscussion:new Date(new Date().setDate(new Date().getDate() - 100)), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:true, judgeId:1},
      {folderNum: "106/2024", aboutDescription:"בדיקת שמירת החלטה 3", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2023", fileOpeningDate:new Date(new Date().setDate(new Date().getDate() - 1)),closeDiscussion:new Date(), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:false, judgeId:4},
      {folderNum: "108/2023", aboutDescription:"בדיקת שמירת החלטה 2", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2026", fileOpeningDate:new Date(),closeDiscussion:new Date(new Date().setDate(new Date().getDate() - 1)), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:true, judgeId:8787},
      {folderNum: "104/2024", aboutDescription:"בדיקת שמירת החלטה 3", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2023", fileOpeningDate:new Date(new Date().setDate(new Date().getDate() - 100)),closeDiscussion:new Date(), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:true, judgeId:1122334455},
      {folderNum: "108/2024", aboutDescription:"בדיקת שמירת החלטה 3", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2023", fileOpeningDate:new Date(new Date().setDate(new Date().getDate() - 30)),closeDiscussion:new Date(), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:false, judgeId:1122334455},
      {folderNum: "103/2022", aboutDescription:"בדיקת שמירת החלטה 3", folderType:"ערר חרבות ברזל-הוצאות מזכות", eligibilityPeriod:"ספטמבר-אוקטובר 2023", fileOpeningDate:new Date(new Date().setDate(new Date().getDate() - 10)),closeDiscussion:new Date(), appellant:"אברהם אברמי",responds:"ישראל ישראלי", charinamOfTheComitte:"ציון ציוני",publicRepresentative:"טרם נבחר", isOpen:true, judgeId:1122334455},
    ]; 

  // This simulates an API call that returns an observable
   this.folders$ = of(this.folders).pipe(delay(1000));
   }
}
