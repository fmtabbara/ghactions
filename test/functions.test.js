import { strict as assert } from 'assert'
import { map } from '../functions.js'

describe('function tests', () => {
  it('should add one to each number in the array', () => {
    const original = [4, 5, 6]
    const mapped = map(original, (i) => i + 1)

    return assert.deepEqual(mapped, [5, 6, 7])
  })
  it('should subtract one from each number in the array', () => {
    const original = [4, 5, 6]
    const mapped = map(original, (i) => i - 1)

    return assert.deepEqual(mapped, [3, 4, 5])
  })
})
