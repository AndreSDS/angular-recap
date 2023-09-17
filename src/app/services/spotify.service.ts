import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfig } from '@/environments/environment.development';
import { IUser } from '../interfaces/IUser';
import { spotifyUserToUser } from '../common/spotifyHelper';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	spotifyApi !: Spotify.SpotifyWebApiJs;
	user: IUser | null = null;

	constructor() {
		this.spotifyApi = new Spotify();
	}

	async initializeUser() {
		if (this.user) {
			return true;
		}

		const token = localStorage.getItem('access_token');

		if (!token) {
			return false;
		}

		try {
			this.setAccessToken(token);
			await this.getSpotifyUser();
			return !!this.user;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async getSpotifyUser() {
		const userInfo = await this.spotifyApi.getMe();
		this.user = spotifyUserToUser(userInfo);
	}

	getLoginUrl(): string {
		const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
		const clientId = `client_id=${SpotifyConfig.clientId}&`;
		const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUri}&`;
		const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`;
		const responseType = `response_type=token&show_dialog=true`;
		const url = `${authEndpoint}${clientId}${redirectUrl}${scopes}${responseType}`;

		return url;
	}

	getTokenFromUrl(): string | null {
		if (
			!window.location.hash ||
			!window.location.hash.includes('access_token')
		) {
			return '';
		}

		const accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];

		return accessToken;
	}

	setAccessToken(token: string): void {
		this.spotifyApi.setAccessToken(token);
		localStorage.setItem('access_token', token);
	}
}
