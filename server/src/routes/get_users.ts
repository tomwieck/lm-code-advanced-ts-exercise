import { User } from "../types/posts";

export function getAllUsers(): User[] {
	return [
		{
			id: "1",
			name: "Spicy Hotfish",
			creationDate: new Date(),
		},
		{
			id: "2",
			name: "Sally-Anne Writerperson",
			creationDate: new Date(),
		},
		{
			id: "3",
			name: "Jimmy Alias",
			creationDate: new Date(),
		},
		{
			id: "4",
			name: 'Steve "The Hoop" Hooper',
			creationDate: new Date(),
		},
	];
}
