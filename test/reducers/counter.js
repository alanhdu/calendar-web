// import test from 'ava'
// import reducer from '../../src/reducers/counter'
// import * as types from '../../src/actions/constants'

// test('counter reducer should return the initial state', t => {
//   const expectedIncrementAction = {
//     type: types.INCREMENT_COUNTER,
//     payload: undefined
//   }
//   t.same(actions.increment(), expectedIncrementAction)
// });





// describe('todos reducer', () => {
//   it('should return the initial state', () => {
//     expect(
//       reducer(undefined, {})
//     ).toEqual([
//       {
//         text: 'Use Redux',
//         completed: false,
//         id: 0
//       }
//     ])
//   })

//   it('should handle ADD_TODO', () => {
//     expect(
//       reducer([], {
//         type: types.ADD_TODO,
//         text: 'Run the tests'
//       })
//     ).toEqual(
//       [
//         {
//           text: 'Run the tests',
//           completed: false,
//           id: 0
//         }
//       ]
//     )

//     expect(
//       reducer(
//         [
//           {
//             text: 'Use Redux',
//             completed: false,
//             id: 0
//           }
//         ],
//         {
//           type: types.ADD_TODO,
//           text: 'Run the tests'
//         }
//       )
//     ).toEqual(
//       [
//         {
//           text: 'Run the tests',
//           completed: false,
//           id: 1
//         },
//         {
//           text: 'Use Redux',
//           completed: false,
//           id: 0
//         }
//       ]
//     )
//   })
// })
