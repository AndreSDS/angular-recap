import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';


@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		RouterModule.forChild(LoginRoutes),
	]
})
export class LoginModule { }
