import test from 'ava';
import colors from '../../app/utils/colors';

test(`returns an updated object with modified color`, t => {
  t.is(colors.getColorMap({white:'modified'}).white,'modified');
});