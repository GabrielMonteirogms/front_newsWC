import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from './pages/portal/portal-component/portal-component';
import { LatestComponent } from './components/latest-component/latest-component';
import { FeaturedComponent } from './components/featured-components/featured-component';
import { MostViewedComponent } from './components/most-viewed-component/most-viewed-component';
import { AdminComponent } from './pages/admin/admin-component/admin-component';
import { NewsDetailsComponent } from './components/new-details/new-details'

const routes: Routes = [

  { path: '', component: PortalComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'most-viewed', component: MostViewedComponent },
  { path: 'news/:id', component: NewsDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
