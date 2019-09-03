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
  var counter = 0;

  const factions = characters.reduce((factions, character) => {
    const faction = factionNameMap[character.Faction];

    if (!factions[faction]) {
      factions[faction] = [];
    }

    factions[faction].push(character);

    return factions;
  }, {});
  console.log(selectedChar);

  const createCard = character => {
    var card = $("<div>");
    var img = $("<img>");
    var bdy = $("<div>");
    var txt = $("<p>");
    card.attr("class", "card");
    card.attr("id", "faction-pick");
    card.attr("style", "width: 13.5rem;");
    card.attr("faction");
    img.attr("class", "card-img-top");
    bdy.attr("class", "card-body");
    txt.attr("class", "card-text");
    img.attr("src", character.ImgSrc);
    txt.append(
      character.Name +
        "<br />" +
        character.Title +
        "<br />&nbsp&nbsp Health: " +
        character.HitPoints +
        "<br />&nbsp&nbsp Damage type: " +
        character.DmgType
    );
    img.appendTo(card);
    bdy.appendTo(card);
    txt.appendTo(bdy);
    card.prependTo(".char-pick-grid");
    counter += 1;
    console.log(counter);
    card.on("click", selectCard);
    function selectCard() {
      selectedFaction = character.Faction;
      selectedChar = character;
      console.log(selectedFaction);
      console.log(selectedChar);
      for (var i = 1; i < counter; i++) {
        card.remove();
        card.off("click", selectCard);
        $("#faction-pick").remove();
      }

      counter = 0;
      console.log(counter);
      console.log("counter reset!");
      if (selectedChar.Name === "The Horde") {
        factions.Horde.forEach(character => {
          createCard(character);
        });
      } else if (selectedChar.Name === "The Alliance") {
        factions.Alliance.forEach(character => {
          createCard(character);
        });
      }
    }
  };
  function playGame() {
    factions.FACTION.forEach(character => {
      createCard(character);
    });
  }
  playGame();
  console.log(factions);
  console.log(selectedChar);

  // $(".enemies-grid");
  // factions.Alliance.forEach(character => {
  //   createCard(character);
  // });
  // factions.Horde.forEach(character => {
  //   createCard(character);
  // });
  // factions.Scourge.forEach(character => {
  //   createCard(character);
  // });

  // $(".char-pick-grid").on("click", "#faction-pick", function() {
  //   $(this)
  //     .detach()
  //     .appendTo(".defender-grid");
  //   $(".char-pick-grid").remove();
  // });
});
