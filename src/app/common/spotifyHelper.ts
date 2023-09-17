import { IUser } from '../interfaces/IUser';

export function spotifyUserToUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
	return {
		id: user.id,
		name: user.display_name || '',
		userImg: user.images ? user.images[0].url : '',
	}
}
