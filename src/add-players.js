console.clear();
const doTheThing = async () => {
  // get the PCs from the actors list
  const PLAYER_TOKENS = ['ahmut', 'eisley', 'tiffany', "george", "ana", "stringer"];
  const players = game.actors.filter(actor => {
    if (PLAYER_TOKENS.includes(actor.name.toLowerCase())) {
      return actor;
    }
  }).map(async actor => {
    // const token = new Token(actor.createEmbeddedDocuments());
    const data = await actor.getTokenData();
    const token = new Token(data);
    return token;
  });

  console.log({ players });


  // Add to map at a position
  console.log(scene);

};

doTheThing();