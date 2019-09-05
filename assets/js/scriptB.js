var counter = 0;
$(document).ready(() => {
  const characters = [
    {
      Name: "The Horde",
      Title: "",
      Faction: "F",
      HitPoints: 1000,
      ImgSrc: "./assets/images/fth.gif",
      baseDmg: ""
    },
    {
      Name: "The Alliance",
      Title: "",
      Faction: "F",
      HitPoints: 1000,
      ImgSrc: "./assets/images/fta.gif",
      baseDmg: ""
    },
    {
      Name: "Sylvanas Windrunner",
      Title: "Warchief of the Horde",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/sylv2.gif",
      baseDmg: 15
    },
    {
      Name: "Anduin Wrynn",
      Title: "King of The Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/anduin2.gif",
      baseDmg: 15
    },
    {
      Name: "Arthas Menethil",
      Title: "The Lich King",
      Faction: "S",
      HitPoints: 400,
      ImgSrc: "./assets/images/arthas.gif",
      baseDmg: 20
    },
    {
      Name: "Chen Stromstout",
      Title: "The Brewmaster",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/panda.gif",
      baseDmg: 12
    },
    {
      Name: "Arcanist Janeda",
      Title: "Fire Mage",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/firemage1.gif",
      baseDmg: 12
    },
    {
      Name: "Varian Wrynn",
      Title: "Former King of the Alliance",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/varianwrynn.gif",
      baseDmg: 15
    },
    {
      Name: "Thrall",
      Title: "Former Warchief of the Horde",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/thrall.gif",
      baseDmg: 15
    },
    {
      Name: "Jaina Proudmoure",
      Title: "Lord Admiral of Kul'tiras",
      Faction: "A",
      HitPoints: 200,
      ImgSrc: "./assets/images/jaina2.gif",
      baseDmg: 15
    },
    {
      Name: "Monoroth",
      Title: "Pitlord",
      Faction: "S",
      HitPoints: 300,
      ImgSrc: "./assets/images/monoroth.gif",
      baseDmg: 20
    },
    {
      Name: "Mile Raitheborne",
      Title: "Undead Warlock",
      Faction: "H",
      HitPoints: 200,
      ImgSrc: "./assets/images/undeadlock.gif",
      baseDmg: 12
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
  var turnsWon = 0;
  var turnsLost = 0;
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
        var turn = 0;
        $(attackBtn).on("click", function() {
          if (turn % 2 === 0) {
            var RNG = Math.floor(Math.random() * 5) + 1;
            var playerHitDmg = selectedChar.baseDmg * RNG;
            selectedEnemy.HitPoints = selectedEnemy.HitPoints - playerHitDmg;
            $(".child-right").append(
              '<div class="combat-log-player">+ You Hit ' +
                selectedEnemy.Name +
                " for " +
                playerHitDmg +
                " Damage (" +
                RNG +
                "x)</div>"
            );
            turn++;
            console.log(RNG);
            console.log(playerHitDmg);
            console.log(selectedEnemy.HitPoints);
            console.log(selectedChar.HitPoints);
          } else {
            var enemyHitDmg = selectedEnemy.baseDmg * 1.5;
            selectedChar.HitPoints = selectedChar.HitPoints - enemyHitDmg * 1.5;
            $(".child-right").append(
              '<div class="combat-log-enemy">- ' +
                selectedEnemy.Name +
                " Hits YOU for " +
                enemyHitDmg +
                "</div>"
            );
            turn++;
            console.log(enemyHitDmg);
            console.log(selectedEnemy.HitPoints);
            console.log(selectedChar.HitPoints);
          }
          if (selectedEnemy.HitPoints <= 0) {
            $(".child-right").append(
              '<div class="winner">' + selectedEnemy.Name + " is Defeated!"
            );
            console.log("ENEMY DED!");
            $(attackBtn).off("click");
            $(attackBtn).remove();
            turnsWon++;
            reset();
          } else if (selectedChar.HitPoints <= 0) {
            $(".child-right").append(
              '<div class="defeat">You are Defeated!</div>'
            );
            console.log("YOU DED BISH!");
            $(attackBtn).off("click");
            $(attackBtn).remove();
            turnsLost++;
            reset();
          }

          function reset() {
            var resetBtn = $("<button>");
            resetBtn.addClass("btn btn-secondary");
            resetBtn.text("Play again?");
            $(".attack-button").append(resetBtn);
            $(resetBtn).on("click", function() {
              $(".child-right").remove();
              $(".parent").append('<div class="child-right"></div>');
              $(".score-card").text(
                "Games Won: " +
                  turnsWon +
                  " | Games Lost: " +
                  turnsLost +
                  " | Total games played: " +
                  (turnsWon + turnsLost)
              );
              $(resetBtn).remove();
              $(".player-choice").remove();
              $(".enemy").remove();
              selectedFaction = "";
              selectedChar = "";
              selectedEnemy = "";
              isCharacterSelected = false;
              startGame();
            });
          }
        });
      }
    }
  };
  var startGame = () => {
    $(".game-area").text("Welcome to Warcraft RPG. Pick your faction!");
    factions.FACTION.forEach(character => {
      createCard(character, ".char-pick-grid", "choice-grid");
    });
  };

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
