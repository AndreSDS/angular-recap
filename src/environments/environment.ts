export const environment = {
	prodction: true,
};

export const SpotifyConfig = {
	clientId: '1de9360786b94a3c90a666ed12f2edff',
	authEndpoint: 'https://accounts.spotify.com/authorize',
	redirectUri: 'http://localhost:4200/login/',
	scopes: [
		'user-read-currently-playing',
		'user-read-recently-played',
		'user-read-playback-state',
		'app-remote-control',
		'user-top-read',
		'user-modify-playback-state',
		'user-library-read',
		'playlist-read-private',
		'playlist-read-collaborative'
	],
}
