import { strict as assert } from 'assert'
import { map } from '../functions.js'

describe('function tests', () => {
  it('should add one to each item in the array', () => {
    const original = [4, 5, 6]
    const mapped = map(original, (i) => i + 1)

    return assert.deepEqual(mapped, [5, 6, 7])
  })
})
