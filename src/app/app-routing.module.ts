import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/lib/mfe.utils';


export const mef = new MfeUtil();


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'restaurants',
	loadChildren: () => mef.loadRemoteFile({
	  remoteName: "restaurant",
	  remoteEntry: `http://localhost:4204/remoteRestaurant.js`,
	  exposedFile: "RestaurantModule",
	  exposeFileType: FileType.Module
    }).then((m) => m.RestaurantModule),
  },
  {
    path: 'order',
	loadChildren: () => mef.loadRemoteFile({
	  remoteName: "orders",
	  remoteEntry: `http://localhost:4205/remoteOrders.js`,
	  exposedFile: "OrderModule",
	  exposeFileType: FileType.Module
	}).then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
