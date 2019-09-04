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
      baseDmg: 8
    },
    {
      Name: "Anduin Varyian Wrynn",
      Title: "King of The Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/anduin2.gif",
      baseDmg: 8
    },
    {
      Name: "Arthas Menethil",
      Title: "The Lich King",
      Faction: "S",
      HitPoints: 400,
      ImgSrc: "./assets/images/arthas.gif",
      baseDmg: 8
    },
    {
      Name: "Chen Stromstout",
      Title: "The Brewmaster",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/panda.gif",
      baseDmg: 8
    },
    {
      Name: "Some BE Mage",
      Title: "Fire Mage",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/firemage1.gif",
      baseDmg: 8
    },
    {
      Name: "Varian Wrynn",
      Title: "Former King of the Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/varianwrynn.gif",
      baseDmg: 8
    },
    {
      Name: "Thrall (Go'el)",
      Title: "Former Warchief of the Horde",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/thrall.gif",
      baseDmg: 8
    },
    {
      Name: "Jaina Proudmoure",
      Title: "Lord Admiral of Kul'tiras",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/jaina2.gif",
      baseDmg: 8
    },
    {
      Name: "Monoroth",
      Title: "Pitlord",
      Faction: "S",
      HitPoints: 300,
      ImgSrc: "./assets/images/monoroth.gif",
      baseDmg: 8
    },
    {
      Name: "Some Lock",
      Title: "Undead Warlock",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/undeadlock.gif",
      baseDmg: 8
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
  var isCharacterSelected = false;
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
    card.attr("id", "card-pick");
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
    card.on("click", selectCard);
    function selectCard() {
      if (!isCharacterSelected) {
        selectedFaction = character.Faction;
        selectedChar = character;
        console.log(selectedFaction);
        console.log(selectedChar);
        for (var i = 1; i < counter; i++) {
          $(".game-area").text("");
          card.remove();
          card.off("click");
          $("#card-pick").remove();
        }
        counter = 0;
        if (selectedChar.Name === "The Horde") {
          $(".game-area").text("Pick your Champion.");
          factions.Horde.forEach(character => {
            createCard(character, ".char-pick-grid", "chioce-grid");
          });
        } else if (selectedChar.Name === "The Alliance") {
          $(".game-area").text("Pick your Champion.");
          factions.Alliance.forEach(character => {
            createCard(character, ".char-pick-grid", "choice-grid");
          });
        }
        selectEnemy();
      } else {
        selectedEnemy = character;
        console.log(selectedFaction);
        console.log(selectedChar);
        console.log("flag = ture");
        console.log(selectedEnemy);
        for (var i = 1; i < counter; i++) {
          $(".game-area").text("");
          card.remove();
          console.log("flag = ture");
          card.off("click");
          $(".enemies-grid").remove();
        }
        counter = 0;
        createCard(selectedEnemy, ".char-pick-grid", "enemy");
        $(".card").off("click");
        $(".game-area").text("Your opponent:");
        attack();
      }
      function selectEnemy() {
        if (selectedChar.Faction === "H") {
          $(".champion").text("Your Champion:");
          createCard(selectedChar, ".champion", "player-choice");
          $(".card").off("click");
          isCharacterSelected = true;
          console.log("flag = Hture");
          $(".game-area").text("Pick your Opponent:");
          factions.Alliance.forEach(character => {
            createCard(character, ".enemies-grid", "enemies");
          });
        } else if (selectedChar.Faction === "A") {
          $(".champion").text("Your Champion:");
          createCard(selectedChar, ".champion", "player-choice");
          $(".card").off("click");
          isCharacterSelected = true;
          console.log("flag = Ature");
          $(".game-area").text("Pick your Opponent:");
          factions.Horde.forEach(character => {
            createCard(character, ".enemies-grid", "enemies");
          });
        }
      }
      function attack() {
        var attackBtn = $("<button>");
        attackBtn.addClass("btn btn-secondary");
        attackBtn.text("ATTACK!");
        $(".attack-button").append(attackBtn);
        calcAtkDmg(selectedChar, 18, 3);
        var turn = 0;
        $(attackBtn).on("click", function() {
          if (turn % 2 === 0) {
            var RNG = Math.floor(Math.random() * 4.0) + 2;
            selectedEnemy.HitPoints =
              selectedEnemy.HitPoints - selectedChar.baseDmg * RNG;
            turn++;
            console.log(RNG);
            console.log(selectedEnemy.HitPoints);
            console.log(selectedChar.HitPoints);
          } else {
            selectedChar.HitPoints =
              selectedChar.HitPoints - selectedEnemy.baseDmg * 1.5;
            turn++;
            console.log(selectedEnemy.HitPoints);
            console.log(selectedChar.HitPoints);
          }
        });
        function calcAtkDmg(character, x, y) {
          var min = character.baseDmg + x;
          var max = character.baseDmg + x * y;
          console.log(min);
          console.log(max);
        }
      }
    }
  };
  var startGame = () => {
    $(".game-area").text("Welcome to Warcraft RPG. Pick your faction!");
    factions.FACTION.forEach(character => {
      createCard(character, ".char-pick-grid", "choice-grid");
    });
  };
  for (var i = 0; i < 100; i++) {
    var a,
      b = 18,
      c = 21,
      d = 1,
      e = Math.random() * 2.0;
    f = 2;
    a = ((b + c) / 2 / d) * ((e * f - 1) / 100 + 1);
    console.log(e);
  }

  startGame();

  // factions.FACTION.forEach(character => {
  //   createCard(character, ".char-pick-grid", "choice-grid");
  //   console.log(selectedChar);
  //   console.log(selectedFaction);
  // });
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
  console.log(factions);

  // $(".char-pick-grid").on("click", "#faction-pick", function() {
  //   $(this)
  //     .detach()
  //     .appendTo(".defender-grid");
  //   $(".char-pick-grid").remove();
  // });
});
