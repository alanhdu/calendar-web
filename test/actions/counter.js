import test from 'ava'
import * as actions from '../../src/actions/counter'
import * as types from '../../src/actions/constants'

test('counter increment action', t => {
  const expectedIncrementAction = {
    type: types.INCREMENT_COUNTER,
    payload: undefined
  }
  t.same(actions.increment(), expectedIncrementAction)
});

test('counter decrement action', t => {
  const expectedDecrementAction = {
    type: types.DECREMENT_COUNTER,
    payload: undefined
  }
  t.same(actions.decrement(), expectedDecrementAction)
});

