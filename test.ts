import test from 'ava';
import isMacosSystemFont from './source/index.js';

test('check if font comes installed with macOS', t => {
	t.true(isMacosSystemFont('Avenir'));
	t.false(isMacosSystemFont('Inter'));
});
