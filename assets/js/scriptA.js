var counter = 0;
$(document).ready(() => {
  const characters = [
    {
      Name: "The Horde",
      Title: "4 Heros",
      Faction: "F",
      HitPoints: 1000,
      ImgSrc: "./assets/images/fth.gif",
      MinDmg: 180,
      MaxDmg: 210,
      DmgType: "FOR THE HORDE!!"
    },
    {
      Name: "The Alliance",
      Title: "4 Heros",
      Faction: "F",
      HitPoints: 1000,
      ImgSrc: "./assets/images/fta.gif",
      MinDmg: 180,
      MaxDmg: 210,
      DmgType: "FOR THE ALLIANCE!!"
    },
    {
      Name: "Sylvanas Windrunner",
      Title: "Warchief of the Horde",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/sylv2.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Shadow"
    },
    {
      Name: "Anduin Varyian Wrynn",
      Title: "King of The Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/anduin2.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Holy"
    },
    {
      Name: "Arthas Menethil",
      Title: "The Lich King",
      Faction: "S",
      HitPoints: 400,
      ImgSrc: "./assets/images/arthas.gif",
      MinDmg: 33,
      MaxDmg: 38,
      DmgType: "Chaos"
    },
    {
      Name: "Chen Stromstout",
      Title: "The Brewmaster",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/panda.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Nature"
    },
    {
      Name: "Some BE Mage",
      Title: "Fire Mage",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/firemage1.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Fire"
    },
    {
      Name: "Varian Wrynn",
      Title: "Former King of the Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/varianwrynn.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Physical"
    },
    {
      Name: "Thrall (Go'el)",
      Title: "Former Warchief of the Horde",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/thrall.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Nature"
    },
    {
      Name: "Jaina Proudmoure",
      Title: "Lord Admiral of Kul'tiras",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/jaina2.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Frost"
    },
    {
      Name: "Monoroth",
      Title: "Pitlord",
      Faction: "S",
      HitPoints: 300,
      ImgSrc: "./assets/images/monoroth.gif",
      MinDmg: 26,
      MaxDmg: 31,
      DmgType: "Chaos"
    },
    {
      Name: "Some Lock",
      Title: "Undead Warlock",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/undeadlock.gif",
      MinDmg: 18,
      MaxDmg: 21,
      DmgType: "Fire"
    }
  ];

  const factionNameMap = {
    H: "Horde",
    A: "Alliance",
    S: "Scourge",
    F: "FACTION"
  };
  var selectedFaction = "";
  var selectedChar;
  var selectedEnemy;
  var counter = 0;

  const factions = characters.reduce((factions, character) => {
    const faction = factionNameMap[character.Faction];

    if (!factions[faction]) {
      factions[faction] = [];
    }

    factions[faction].push(character);

    return factions;
  }, {});
  /* 
    
          * "Character": creates a bootstrap card per character in an array (faction).
          * ".cardclass": a choice on which html <div> to place the cards (characters)
          * the "." DOT IS A MUST!!!!.
          * "charClass": gives each bootstrap card a class per array (faction). 

  */

  const createCard = (character, parentDiv = "", charCardClass = "") => {
    var card = $("<div>"),
      img = $("<img>"),
      bdy = $("<div>"),
      txt = $("<p>"),
      papaDiv = $(parentDiv);
    card.attr("class", "card " + charCardClass);
    card.attr("id", "faction-pick");
    card.attr("style", "width: 13.5rem;");
    card.attr("faction");
    img.attr("class", "card-img-top");
    bdy.attr("class", "card-body");
    txt.attr("class", "card-text");
    img.attr("src", character.ImgSrc);
    txt.append(character.Name);
    img.appendTo(card);
    bdy.appendTo(card);
    txt.appendTo(bdy);
    card.prependTo(papaDiv);
    counter += 1;
    card.on("click", selectplayer);
  };
  function selectplayer() {
    selectedFaction = character.Faction;
    selectedChar = character;
    for (var i = 1; i < counter; i++) {
      $(".game-area").text("");
      card.remove();
      card.off("click", selectCard);
      $("#faction-pick").remove();
    }
    counter = 0;
  }

  //   card.on("click", selectCard);
  //   function selectCard() {
  //     selectedFaction = character.Faction;
  //     selectedChar = character;
  //     console.log(selectedFaction);
  //     console.log(selectedChar);
  //     for (var i = 1; i < counter; i++) {
  //       $(".game-area").text("");
  //       card.remove();
  //       card.off("click", selectCard);
  //       $("#faction-pick").remove();
  //     }
  //     counter = 0;
  //     if (selectedChar.Name === "The Horde") {
  //       $(".game-area").text("Pick your Champion.");
  //       factions.Horde.forEach(character => {
  //         createCard(character, ".char-pick-grid", "chioce-grid");
  //       });
  //     } else if (selectedChar.Name === "The Alliance") {
  //       $(".game-area").text("Pick your Champion.");
  //       factions.Alliance.forEach(character => {
  //         createCard(character, ".char-pick-grid", "choice-grid");
  //       });
  //     }
  //     function selectEnemy() {
  //       if (selectedChar.Faction === "H") {
  //         $(".champion").text("Your Champion:");
  //         createCard(selectedChar, ".champion", "player-choice");
  //         factions.Alliance.forEach(character => {
  //           createCard(character, ".enemies-grid", "enemies");
  //         });
  //       } else if (selectedChar.Faction === "A") {
  //         $(".champion").text("Your Champion:");
  //         createCard(selectedChar, ".champion", "player-choice");
  //         factions.Horde.forEach(character => {
  //           createCard(character, ".enemies-grid", "enemies");
  //         });
  //       }
  //     }
  //     selectEnemy();
  //   }
  // };
  // var startGame = () => {
  //   $(".game-area").text("Welcome to Warcraft RPG. Pick your faction!");
  //   factions.FACTION.forEach(character => {
  //     createCard(character, ".char-pick-grid", "choice-grid");
  //   });
  // };
  // startGame();

  // factions.FACTION.forEach(character => {
  //   createCard(character, ".char-pick-grid", "choice-grid");
  //   console.log(selectedChar);
  //   console.log(selectedFaction);
  // });
  // $(".enemies-grid");
  // factions.Alliance.forEach(character => {
  //   createCard(character);
  // });
  factions.Horde.forEach(character => {
    createCard(character, ".char-pick-grid", "choice-grid");
  });
  $(".choice-grid").on("click");
  // factions.Scourge.forEach(character => {
  //   createCard(character);
  // });
  console.log(factions);

  // $(".char-pick-grid").on("click", "#faction-pick", function() {
  //   $(this)
  //     .detach()
  //     .appendTo(".defender-grid");
  //   $(".char-pick-grid").remove();
  // });
});
