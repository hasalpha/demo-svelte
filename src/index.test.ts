import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe("startsWith test", () => {
	it("should return true if it startsWith blob", () => {
		expect('hasan is awesome'.startsWith('hasan')).toEqual(true);
	});
});
