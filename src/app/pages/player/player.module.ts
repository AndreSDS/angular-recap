import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { PlayerComponent } from './player.component';

@NgModule({
	declarations: [
		PlayerComponent
	],
	imports: [
		RouterModule.forChild(PlayerRoutes)
	]
})
export class PlayerModule { }
