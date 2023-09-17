export const environment = {
	prodction: false,
};

export const SpotifyConfig = {
	clientId: '1de9360786b94a3c90a666ed12f2edff',
	authEndpoint: 'https://accounts.spotify.com/authorize',
	redirectUri: 'http://localhost:4200/login/',
	scopes: [
		'user-read-private',
		'user-read-email',
		'user-read-playback-state',
		'user-modify-playback-state',
		'user-read-currently-playing',
		'user-read-recently-played',
		'app-remote-control',
		'user-library-read',
		'user-library-modify',
		'user-read-playback-position',
		'user-read-private',
		'user-top-read',
		'playlist-read-private',
		'playlist-read-collaborative'
	],
}
