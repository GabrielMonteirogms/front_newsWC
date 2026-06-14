import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AdminComponent } from './pages/admin/admin-component/admin-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { LatestComponent } from './components/latest-component/latest-component';
import { PortalComponent } from './pages/portal/portal-component/portal-component';
import { MostViewedComponent } from './components/most-viewed-component/most-viewed-component';
import { FeaturedComponent } from './components/featured-components/featured-component';
import { NewsDetailsComponent } from './components/new-details/new-details';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    FeaturedComponent,
    LatestComponent,
    PortalComponent,
    MostViewedComponent,
    NewsDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
