import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SideMenuComponent } from './side-menu/side-menu';

@NgModule({
	declarations: [
        LoginComponent,
        SideMenuComponent
    ],
	imports: [],
	exports: [
        LoginComponent,
        SideMenuComponent
    ]
})
export class ComponentsModule {}
