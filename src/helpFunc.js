/*
 * Help functions
 */

/*
 * Convert to minutes
 */
export function durationConvMin(time) {
  return Math.floor(time / 60) % 60;
}

/*
 * Convert to seconds
 */
export function durationConvSec(time) {
  return Math.floor(time - (Math.floor(time / 60) % 60) * 60);
}

/*
 * Convert date to YYYY-MM-DD
 */
export function dateConv(date) {
  return date.substring(0, 10);
}
