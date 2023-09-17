import { Injectable, inject } from '@angular/core';
import { CanLoad, CanMatchFn, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
	private router: Router = inject(Router);
	private spotifyService: SpotifyService = inject(SpotifyService);

	canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
		const token = localStorage.getItem('access_token');

		if (!token) {
			return this.nonAuthenticaded();
		}

		const userCreated = this.spotifyService.initializeUser();

		if (!userCreated) {
			return this.nonAuthenticaded();
		}

		return true;
	}

	nonAuthenticaded() {
		localStorage.clear();
		this.router.navigate(['/login']);
		return false;
	}
}
