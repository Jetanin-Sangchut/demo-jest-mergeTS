/**
 * Merges three sorted arrays into one sorted array in ascending order
 * @param collection_1 - Array sorted from max to min (descending)
 * @param collection_2 - Array sorted from min to max (ascending)
 * @param collection_3 - Array sorted from min to max (ascending)
 * @returns A new array containing all elements sorted in ascending order
 */
export function merge(collection_1: number[],collection_2: number[],collection_3: number[]): number[] {
  let result: number[] = []
  let i = collection_1.length - 1; // Start from end for descending sorted array
  let j = 0;
  let k = 0;

  if (collection_1.length === 0 && collection_2.length === 0 && collection_3.length === 0) return result;

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    let compares: number[] = [];

    if (i >= 0) compares.push(collection_1[i]);
    if (j < collection_2.length) compares.push(collection_2[j]);
    if (k < collection_3.length) compares.push(collection_3[k]);

    // Find min from 3 index values
    let min = compares[0];
    for (let num of compares) {
      if (num < min) min = num;
    }
    //current i,j,k compares values
    if (i >= 0 && collection_1[i] === min) { 
      result.push(collection_1[i]);
      i--;
    } else if (j < collection_2.length && collection_2[j] === min) {
      result.push(collection_2[j]);
      j++;
    } else if (k < collection_3.length && collection_3[k] === min) {
      result.push(collection_3[k]);
      k++;
    }
  }

  return result;
}