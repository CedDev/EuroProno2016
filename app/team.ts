export interface Team {
	id: number,
	code:string,
	name: string,
	group:string
};

export interface Calendar {
	id: number,
	typematch: string,
	team1: string,
	team2: string,
	date: string,
	stade: string
};