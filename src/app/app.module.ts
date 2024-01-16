import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { StudiantsComponent } from './pages/studiants/studiants.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, SidebarComponent, StudiantsComponent,StudiantsComponent, PageWrapperComponent],
  imports: [BrowserModule, AppRoutingModule, ToolbarComponent, SidebarComponent,StudiantsComponent,PageWrapperComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
