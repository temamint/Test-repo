const nameChecker = require('./index');


test('checking name from nigger', () => {
	expect(nameChecker.checkPersonName('Artem')).toBe('Ban');
});

test('checking name from nigger', () => {
	expect(nameChecker.checkPersonName('Lesha')).not.toBe('Ban');
});

test('checking name from nigger', () => {
	expect(nameChecker.checkPersonName('Dima')).not.toBe('Ban');
});


