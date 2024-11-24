import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppHeaderNavBarComponent } from './components/app-header-nav-bar/app-header-nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { FoldersSearchPanelComponent } from './components/folders-search-panel/folders-search-panel.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FoldersComponent } from './components/folders/folders.component';
import { FolderComponent } from './components/folder/folder.component';
import { FormsModule } from '@angular/forms';
import { FilterClassPipe } from "./pipes/filter-class.pipe"; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderNavBarComponent,
    FoldersSearchPanelComponent,
    FoldersComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    FilterClassPipe,
    MatFormFieldModule, 
    MatSelectModule,
     MatInputModule
],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
