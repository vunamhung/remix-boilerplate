import { compose, curry, intersection, isEmpty, isNil, not, replace, toUpper, unless } from 'ramda';

/**
 * For not-nil string returns string where every single word starts with a capital letter.
 *
 * @func
 * @category String
 *
 * @param {any} x Any string
 * @return {any} String where every word starts with upper-case letter
 *
 * @example
 *
 *        R_.capitalizeAll('seek and destroy') // Seek And Destroy
 *        R_.capitalizeAll('Seek And Destroy') // Seek And Destroy
 *        R_.capitalizeAll(null) // null
 *        R_.capitalizeAll(undefined) // undefined
 *
 * @sig String -> String
 */
export const capitalizeAll = unless(isNil, replace(/(\b\w(?!\s))/g, toUpper));

export const array = <T>(count: number, cb: (index: number) => T): T[] => {
  let newArray: any[] = [];
  for (let i = 0; i < count; i++) {
    newArray = [...newArray, cb(i)];
  }

  return newArray;
};

/**
 * Returns `true` if any of the items from first array are in the second array.
 *
 * @func
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array are in the second array.
 *
 * @example
 *
 *    R_.containsAny(['a', 'e'], ['a', 'b', 'c']) // true
 *    R_.containsAny(['e', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */
export const containsAny = curry(compose(not, isEmpty, intersection));
