import test from 'ava';
import colors from '../../app/utils/colors';

test('colors', t => {
  t.false(false);
});

test(`returns a an array of colors`, t => {
  t.is(colors.getColorMap('blue'),'blue');
});
