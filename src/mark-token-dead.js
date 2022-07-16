const deadObject = {
  "label": "Dead",
  "icon": "icons/svg/skull.svg"
};

const selected = canvas.tokens.controlled;
console.log({ selected });

const targets = canvas.tokens.controlled.map(token => {
  return {
    _id: token.id,
    tint: "#FF0000",
    overlayEffect: deadObject.icon,
  };
});
console.log({ targets });
canvas.scene.updateEmbeddedDocuments('Token', targets);



const { combat } = game;
const { combatants } = combat;
console.log({ combatants });


const defeated = [];

targets.forEach(t => {
  const target = combatants._source.find(c => c.tokenId === t._id);
  console.log({ target });
  if (target) {
    defeated.push({
      _id: target._id,
      defeated: true
    });
  }
});

console.log({ defeated });
combat.updateEmbeddedDocuments("Combatant", defeated);