export interface ProcessedMilliseconds {
	[key: string]: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
	microseconds: number;
	nanoseconds: number;
}

const parseMilliseconds = (milliseconds: number): ProcessedMilliseconds => {
	return {
		days: Math.trunc(milliseconds / 86400000),
		hours: Math.trunc(milliseconds / 3600000) % 24,
		minutes: Math.trunc(milliseconds / 60000) % 60,
		seconds: Math.trunc(milliseconds / 1000) % 60,
		milliseconds: Math.trunc(milliseconds) % 1000,
		microseconds: Math.trunc(milliseconds * 1000) % 1000,
		nanoseconds: Math.trunc(milliseconds * 1e6) % 1000,
	};
};

export default parseMilliseconds;
