/* global Die */

/**
 * Extend the basic Die to show custom vampire icons on a d10.
 * @extends {Die}
 */
export class VampireDie extends Die {
  constructor (termData) {
    termData.faces = 10
    super(termData)
  }

    /** @override */
    static DENOMINATION = 'v';

    /** @override */
    static getResultLabel (result) {
      return {
        1: '<img src="systems/vm20DarkAge/img/normal-fail.png" />',
        2: '<img src="systems/vm20DarkAge/img/normal-fail.png" />',
        3: '<img src="systems/vm20DarkAge/img/normal-fail.png" />',
        4: '<img src="systems/vm20DarkAge/img/normal-fail.png" />',
        5: '<img src="systems/vm20DarkAge/img/normal-fail.png" />',
        6: '<img src="systems/vm20DarkAge/img/normal-success.png" />',
        7: '<img src="systems/vm20DarkAge/img/normal-success.png" />',
        8: '<img src="systems/vm20DarkAge/img/normal-success.png" />',
        9: '<img src="systems/vm20DarkAge/img/normal-success.png" />',
        10: '<img src="systems/vm20DarkAge/img/normal-crit.png" />'
      }[result]
    }
}

/**
 * Extend the basic Die to show custom vampire icons on a d10.
 * @extends {Die}
 */
export class VampireHungerDie extends Die {
  constructor (termData) {
    termData.faces = 10
    super(termData)
  }

    /** @override */
    static DENOMINATION = 'h';

    /** @override */
    static getResultLabel (result) {
      return {
        1: '<img src="systems/vm20DarkAge/img/bestial-fail.png" />',
        2: '<img src="systems/vm20DarkAge/img/red-fail.png" />',
        3: '<img src="systems/vm20DarkAge/img/red-fail.png" />',
        4: '<img src="systems/vm20DarkAge/img/red-fail.png" />',
        5: '<img src="systems/vm20DarkAge/img/red-fail.png" />',
        6: '<img src="systems/vm20DarkAge/img/red-success.png" />',
        7: '<img src="systems/vm20DarkAge/img/red-success.png" />',
        8: '<img src="systems/vm20DarkAge/img/red-success.png" />',
        9: '<img src="systems/vm20DarkAge/img/red-success.png" />',
        10: '<img src="systems/vm20DarkAge/img/red-crit.png" />'
      }[result]
    }
}
