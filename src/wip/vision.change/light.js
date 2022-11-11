const VISION_LEVELS = {
  LOW_LIGHT: { dimSight: 120, brightSight: 60, flags: { "perfect-vision": { sightLimit: null } } },
  NORMAL: { dimSight: 0, brightSight: 0, flags: { "perfect-vision": { sightLimit: null } } },
  DARK_VISION: { dimSight: 200, brightSight: 0, flags: { "perfect-vision": { sightLimit: null } } },
  FOG: { flags: { "perfect-vision": { sightLimit: 5 } } },
  MAGICAL_DARKNESS: { flags: { "perfect-vision": { sightLimit: 0 } } },
};

//get selected token
// set vision level

const selected = canvas.tokens.controlled;

const targets = selected.map(token => {
  return {
    _id: token.id,
    ...VISION_LEVELS.FOG
  };
});
console.log({ selected, targets });
canvas.scene.updateEmbeddedDocuments('Token', targets);
