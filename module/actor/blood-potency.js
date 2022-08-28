/* global game */

export function getBloodPotencyValues (level) {
  const BLOOD_POTENCY_VALUES = [
    {
      surge: 1,
      mend: 1,
      power: 0,
      rouse: 0,
      bane: 0
    },
    {
      surge: 2,
      mend: 1,
      power: 0,
      rouse: 1,
      bane: 2
    },
    {
      surge: 2,
      mend: 2,
      power: 1,
      rouse: 1,
      bane: 2
    },
    {
      surge: 3,
      mend: 2,
      power: 1,
      rouse: 2,
      bane: 3
    },
    {
      surge: 3,
      mend: 3,
      power: 2,
      rouse: 2,
      bane: 3
    },
    {
      surge: 4,
      mend: 3,
      power: 2,
      rouse: 3,
      bane: 4
    },
    {
      surge: 4,
      mend: 3,
      power: 3,
      rouse: 3,
      bane: 4
    },
    {
      surge: 5,
      mend: 3,
      power: 3,
      rouse: 4,
      bane: 5
    },
    {
      surge: 5,
      mend: 4,
      power: 4,
      rouse: 4,
      bane: 5
    },
    {
      surge: 6,
      mend: 4,
      power: 4,
      rouse: 5,
      bane: 6
    },
    {
      surge: 6,
      mend: 5,
      power: 5,
      rouse: 5,
      bane: 6
    }
  ]
  return BLOOD_POTENCY_VALUES[level]
}

export function getBloodPotencyText (level) {
  // TODO : Some of this could be deducted from previous array.
  const BLOOD_POTENCY_TEXT = [
    {
      surge: game.i18n.localize('vm20DarkAge.Add1Dice'),
      mend: game.i18n.localize('vm20DarkAge.1SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.None'),
      rouse: game.i18n.localize('vm20DarkAge.None'),
      bane: '0',
      feeding: game.i18n.localize('vm20DarkAge.NoEffect')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add2Dice'),
      mend: game.i18n.localize('vm20DarkAge.1SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.None'),
      rouse: game.i18n.localize('vm20DarkAge.Level1'),
      bane: '2',
      feeding: game.i18n.localize('vm20DarkAge.NoEffect')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add2Dice'),
      mend: game.i18n.localize('vm20DarkAge.2SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add1Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level1'),
      bane: '2',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty1')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add3Dice'),
      mend: game.i18n.localize('vm20DarkAge.2SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add1Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level2'),
      bane: '3',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty2')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add3Dice'),
      mend: game.i18n.localize('vm20DarkAge.3SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add2Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level2'),
      bane: '3',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty3')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add4Dice'),
      mend: game.i18n.localize('vm20DarkAge.3SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add2Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level3'),
      bane: '4',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty4')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add4Dice'),
      mend: game.i18n.localize('vm20DarkAge.3SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add3Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level3'),
      bane: '4',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty5')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add5Dice'),
      mend: game.i18n.localize('vm20DarkAge.3SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add3Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level4'),
      bane: '5',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty5')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add5Dice'),
      mend: game.i18n.localize('vm20DarkAge.4SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add4Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level4'),
      bane: '5',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty6')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add6Dice'),
      mend: game.i18n.localize('vm20DarkAge.4SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add4Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level5'),
      bane: '6',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty6')
    },
    {
      surge: game.i18n.localize('vm20DarkAge.Add6Dice'),
      mend: game.i18n.localize('vm20DarkAge.5SuperficialDamage'),
      power: game.i18n.localize('vm20DarkAge.Add5Dice'),
      rouse: game.i18n.localize('vm20DarkAge.Level5'),
      bane: '6',
      feeding: game.i18n.localize('vm20DarkAge.FeedingPenalty7')
    }
  ]

  return BLOOD_POTENCY_TEXT[level]
}
