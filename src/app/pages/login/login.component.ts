import { SpotifyService } from '@/app/services/spotify.service';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private spotifyService = inject(SpotifyService);
	private router: Router = inject(Router);

	ngOnInit(): void {
		this.verifyTokenFromUrl();
	}

	openLoginPage() {
		window.location.href = this.spotifyService.getLoginUrl();
	}

	verifyTokenFromUrl() {
		const token = this.spotifyService.getTokenFromUrl();

		if (!token) {
			return;
		}

		this.spotifyService.setAccessToken(token);
		this.router.navigate(['/player']);
	}
}
