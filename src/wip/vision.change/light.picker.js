const VISION_LEVELS = {
  LOW_LIGHT: { dimSight: 120, brightSight: 60, flags: { "perfect-vision": { sightLimit: null } } },
  NORMAL: { dimSight: 0, brightSight: 0, flags: { "perfect-vision": { sightLimit: null } } },
  DARK_VISION: { dimSight: 200, brightSight: 0, flags: { "perfect-vision": { sightLimit: null } } },
  FOG: { flags: { "perfect-vision": { sightLimit: 5 } } },
  MAGICAL_DARKNESS: { flags: { "perfect-vision": { sightLimit: 0 } } },
};
const updateSelected = (level) => {
  const selected = canvas.tokens.controlled;
  const targets = selected.map(token => {
    return {
      _id: token.id,
      ...VISION_LEVELS[level]
    };
  });
  canvas.scene.updateEmbeddedDocuments('Token', targets);
};

let dialogEditor = new Dialog({
  title: "Select Vision Level",
  content: 'hope for the best!',
  buttons: {
    ...(Object.keys(VISION_LEVELS).map(level => {
      return {
        label: level,
        callback: () => updateSelected(level)
      };
    }))
  }
});

dialogEditor.render(true);