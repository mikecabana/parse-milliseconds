import { expect } from 'chai';
import parseMilliseconds from '../src/index';

describe('Parse Milliseconds', () => {
	it('checking for basic run success', () => {
		expect(parseMilliseconds(0)).to.not.equal(null);
		expect(parseMilliseconds(0)).to.be.an('object');
	});

	it('checking test case 1 -> 579339165.6666666 milliseconds', () => {
		const testCase = 579339165.6666666;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(6);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(16);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(55);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(39);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(165);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(666);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(666);
	});

	it('checking test case 2 -> 1000 + 400 milliseconds', () => {
		const testCase = 1000 + 400;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(1);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(400);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 3 -> 1000 * 55 milliseconds', () => {
		const testCase = 1000 * 55;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(55);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 3 -> 1000 * 67 milliseconds', () => {
		const testCase = 1000 * 67;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(1);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(7);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 4 -> 1000 * 60 * 5 milliseconds', () => {
		const testCase = 1000 * 60 * 5;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(5);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 5 -> 1000 * 60 * 67 milliseconds', () => {
		const testCase = 1000 * 60 * 67;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(1);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(7);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 6 -> 1000 * 60 * 60 * 12 milliseconds', () => {
		const testCase = 1000 * 60 * 60 * 12;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(12);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 7 -> 1000 * 60 * 60 * 40 milliseconds', () => {
		const testCase = 1000 * 60 * 60 * 40;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(1);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(16);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 8 -> 1000 * 60 * 60 * 999 milliseconds', () => {
		const testCase = 1000 * 60 * 60 * 999;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(41);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(15);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(0);
	});

	it('checking test case 9 -> (1000 * 60) + 500 + 0.345678 milliseconds', () => {
		const testCase = 1000 * 60 + 500 + 0.345678;
		const parsed = parseMilliseconds(testCase);

		expect(parsed).to.be.an('object').to.have.property('days').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('hours').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('minutes').to.equal(1);
		expect(parsed).to.be.an('object').to.have.property('seconds').to.equal(0);
		expect(parsed).to.be.an('object').to.have.property('milliseconds').to.equal(500);
		expect(parsed).to.be.an('object').to.have.property('microseconds').to.equal(345);
		expect(parsed).to.be.an('object').to.have.property('nanoseconds').to.equal(678);
	});

	it('checking negative millisecond values', () => {
		const types = ['days', 'hours', 'minutes', 'seconds', 'milliseconds'];

		const times = [
			0.0005,
			0.3,
			100 + 400,
			1000 * 55,
			1000 * 67,
			1000 * 60 * 5,
			1000 * 60 * 67,
			1000 * 60 * 60 * 12,
			1000 * 60 * 60 * 40,
			1000 * 60 * 60 * 999,
		];

		for (const milliseconds of times) {
			const positive = parseMilliseconds(milliseconds);
			const negative = parseMilliseconds(-milliseconds);

			for (const key of types) {
				const n = negative[`${key}`];
				const p = positive[`${key}`];
				expect(n).is.equal(-p);
			}
		}
	});
});
