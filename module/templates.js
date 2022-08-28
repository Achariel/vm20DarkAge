/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  console.log('Schrecknet : loading subroutines')
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    'systems/vm20DarkAge/templates/actor/parts/biography.html',
    'systems/vm20DarkAge/templates/actor/parts/blood.html',
    'systems/vm20DarkAge/templates/actor/parts/disciplines.html',
    'systems/vm20DarkAge/templates/actor/parts/exp.html',
    'systems/vm20DarkAge/templates/actor/parts/features.html',
    'systems/vm20DarkAge/templates/actor/parts/frenzy.html',
    'systems/vm20DarkAge/templates/actor/parts/health.html',
    'systems/vm20DarkAge/templates/actor/parts/humanity.html',
    'systems/vm20DarkAge/templates/actor/parts/hunger.html',
    'systems/vm20DarkAge/templates/actor/parts/profile-img.html',
    'systems/vm20DarkAge/templates/actor/parts/other.html',
    'systems/vm20DarkAge/templates/actor/parts/rouse.html',
    'systems/vm20DarkAge/templates/actor/parts/stats.html',
    'systems/vm20DarkAge/templates/actor/parts/willpower.html',

    // Item Sheet Partials
    'systems/vm20DarkAge/templates/item/parts/skills.html',
    'systems/vm20DarkAge/templates/item/parts/disciplines.html',
    'systems/vm20DarkAge/templates/item/parts/attributes.html',

    // Dice Tray Partials
    'systems/vm20DarkAge/templates/ui/parts/select-character.html',
    'systems/vm20DarkAge/templates/ui/parts/pool1-select-attribute.html',
    'systems/vm20DarkAge/templates/ui/parts/pool1-select-skill.html',
    'systems/vm20DarkAge/templates/ui/parts/pool1-select-discipline.html',
    'systems/vm20DarkAge/templates/ui/parts/pool2-select-attribute.html',
    'systems/vm20DarkAge/templates/ui/parts/pool2-select-skill.html',
    'systems/vm20DarkAge/templates/ui/parts/pool2-select-discipline.html',
    'systems/vm20DarkAge/templates/ui/parts/pool2-nothing.html'
  ]

  /* Load the template parts
     That function is part of foundry, not founding it here is normal
  */
  return loadTemplates(templatePaths) // eslint-disable-line no-undef
}
