const story = {
    "start": {
        text: "You've perfected a high-quality meth recipe, almost as pure as Heisenberg's. Local dealers take notice. How do you start your empire?",
        choices: 
        [
            { text: "Work with a mid-level distributor connected to the cartel.", next: "cartel_test"},
            { text: "Go independent and start dealing in small batches.", next: "street_war"},
            { text: "Contact an old associate of Walter White for insider help.", next: "law_crime"}
        ],
        background: "Assets/lab1.jpeg" 
    },
    "cartel_test": {
        text: "The cartel wants proof of your commitment—they order you to take out a snitch in their ranks. What do you do?",
        choices: [
            { text: "Complete the job without hesitation.", next: "cartel_seat"},
            { text: "Refuse and try to escape their grip.", next: "hunted_cartel" }
        ],
        background: "Assets/loyalty.webp" 
    },
    "street_war": {
        text: "Small-time dealers see you as competition. They send a warning—your best friend is killed. What is your move?",
        choices: [
            { text: "Go to war like Walter White.", next: "king_streets"},
            { text: "Offer a deal for peace.", next: "dangerous_partnership"}
        ],
          background: "Assets/warning.jpeg"
    },
    "law_crime": {
        text: "Saul Goodman's old contacts help you but expect a cut. What do you do?",
        choices: [
            { text: "Accept their offer, gaining powerful connections.", next: "corruption_web"},
            { text: "Work with a corrupt cop to keep the DEA off your back.", next: "dea_closing",}
        ],
        background: "Assets/Saul.webp"
    },
    "cartel_seat": {
        text: "You gain cartel protection but must prove loyalty again. Do you...",
        choices: [
            { text: "Kill your cartel boss and take over.", next: "kingpin_rise"},
            { text: "Stay loyal and follow orders.", next: "cartel_pawn"}
        ],
        background: "Assets/decision.webp"
    },
    "hunted_cartel": {
        text: "The cartel sends assassins after you. What now?",
        choices: [
            { text: "Run away and fake your death.", next: "fake_death" },
            { text: "Fight back and take control.", next: "fugitive_survival" }
        ],
         background: "Assets/hunt.webp"
    },
    "king_streets": {
        text: "You eliminated rivals, but now the DEA and cartel notice you. What do you do?",
        choices: [
            { text: "Partner with a corrupt official for safety.", next: "corrupt_kingpin"},
            { text: "Build an underground network.", next: "paranoid_empire"}
        ],
         background: "Assets/kill.webp"
    },
    "corrupt_kingpin": {
        text: "You bought your way into power, but the DEA is closing in. Your final choice?",
        choices: [
            { text: "Flee the country and start over.", next: "ghost_kingpin"},
            { text: "Take out all loose ends.", next: "scarface_ending"}
        ],  
        background: "Assets/DEA.webp"
    },
    "cartel_pawn": {
        text: "You stay loyal to the cartel, but your position is unstable. The cartel now uses you as a pawn. What do you do?",
        choices: [
            { text: "Take a risk and try to rise in the ranks.", next: "rising_pawn"},
            { text: "Accept your fate and remain loyal.", next: "cartel_life"}
        ],  
        background: "Assets/under_cartel.webp"
    },
    "scarface_ending": {
        text: "You die at the height of power, like Walter White.",
        choices: [],
        background: "Assets/die.mp4"
    },
    "ghost_kingpin": {
        text: "You rule from the shadows, but your existence is a mystery.",
        choices: [],
        background: "Assets/Rule_from_shadows.jpeg"
    },
    "redemption_regret": {
        text: "You escape the life but lose everything you built.",
        choices: [],
        background: "Assets/lost.webp"
    },
    "forgotten_alone": {
        text: "You vanish, erased from history.",
        choices: [],
        background: "Assets/mystery.webp"
    },
    "fake_death": {
        text: "You faked your death, but now you're on the run, always looking over your shoulder. The cartel and the law may still be after you. What's your next move?",
        choices: [
            { text: "Start a new life with a fake identity.", next: "new_identity" },
            { text: "Return to your old life and confront your past.", next: "scarface_ending"}
        ],
        background: "Assets/back.webp"
    },
    "new_identity": {
        text: "You successfully start a new life under a different name. You've escaped the world of crime, but can you ever truly be free?",
        choices: [
            { text: "Live out the rest of your life in peace.", next: "redemption_regret"},
            { text: "Return to the game for one last big score.", next: "start"}
        ],
        background: "Assets/free.webp"
    },
    "fugitive_survival": {
    text: "You fight back against the cartel's assassins, showing no fear. In a bloody battle, you manage to defeat them and take control of your fate. But, now, the cartel views you as a threat. What is your next move?",
    choices: [
        { text: "Take control of the cartel's operations.", next: "cartel_takeover"},
        { text: "Use your newfound power to disappear and live quietly."}
    ],background: "Assets/fight.webp"
    },

    "cartel_takeover": {
        text: "You successfully seize control of the cartel's operations, becoming a feared and powerful figure. But with power comes danger. The DEA and rival factions come for you. Will you hold on to your new empire?",
        choices: [
            { text: "Eliminate all rivals and expand your empire.", next: "scarface_ending"},
            { text: "Make a deal with the DEA to ensure your survival.", next: "ghost_kingpin"}
        ],background: "Assets/respect.webp"
    },

    "paranoid_empire": {
        text: "You decide to build a secret underground network, relying on discreet operations and the loyalty of your inner circle. With the DEA and cartel breathing down your neck, you grow more cautious, but the power you wield is undeniable. How do you proceed?",
        choices: [
            { text: "Expand your operations and take down the cartel from within.", next: "cartel_infiltration"},
            { text: "Lay low and fortify your defenses while avoiding conflict.", next: "underground_kingpin"}
        ],
        background:"Assets/shadows.webp"
    },

    "cartel_infiltration": {
        text: "Using your underground network, you infiltrate the cartel and start taking down their operations from within. The cartel is now on the brink of collapse, and you become its new, silent leader. However, the DEA is closing in, and your next move is critical.",
        choices: [
            { text: "Seize the cartel's assets and establish your dominance.", next: "scarface_ending"},
            { text: "Make a deal with the DEA to secure your empire.", next: "ghost_kingpin"}
        ],
        background:"Assets/connections.webp"
    },

    "underground_kingpin": {
        text: "You continue to grow your underground network, remaining largely hidden from the public eye. The DEA is aware of your existence, but they can't touch you as long as you stay out of the spotlight. Eventually, you become the true kingpin, but your paranoia keeps you isolated.",
        choices: [
            { text: "Maintain your hidden empire indefinitely.", next: "redemption_regret"},
            { text: "Return to the surface for one final confrontation with the cartel."}
        ],
        background:"Assets/hide.webp"
    },

    "dangerous_partnership": {
        text: "You choose to offer a deal for peace, aiming to avoid further bloodshed. However, the small-time dealers are skeptical, and your offer comes at a high price. They demand a percentage of your profits and a share of your territory. What do you do?",
        choices: [
            { text: "Agree to their terms and secure temporary peace.", next: "temporary_truce"},
            { text: "Refuse their demands and risk a bloody war.", next: "king_streets"}
        ],
        background:"Assets/Deal.webp"
    },

    "temporary_truce": {
        text: "You agree to the small-time dealers' demands, giving them a share of your profits and territory. For now, peace is secured, but the underworld is a dangerous place, and you never know when a truce will break. Do you trust your new 'partners'?",
        choices: [
            { text: "Use this time to grow your empire and build stronger alliances.", next: "underworld_network"},
            { text: "Betray them before they can betray you.", next: "cartel_infiltration"}
        ],
        background:"Assets/Deal_done.webp"
    },

    "underworld_network": {
        text: "You use your connections to quietly grow your empire, staying under the radar. Your operations become smooth, and your influence spreads. But, as your power grows, the fear of being exposed haunts you. What will you do next?",
        choices: [
            { text: "Build a hidden empire that even the DEA cannot touch.", next: "paranoid_empire" },
            { text: "Expand openly, taking more territory and eliminating rivals.", next: "cartel_takeover"}
        ],
        background:"Assets/connections.webp"
    },


    "cartel_infiltration": {
        text: "You betray your partners and use your new alliances to infiltrate the cartel. The cartel's operations are now within your reach, and you can take them down from the inside. But this path is dangerous. Are you ready to go all in?",
        choices: [
            { text: "Seize control of the cartel's operations and expand your empire.", next: "scarface_ending"},
            { text: "Make a deal with the DEA to secure your future.", next: "ghost_kingpin"}
        ],background:"Assets/respect.webp"
    },

    "corruption_web": {
        text: "You accept Saul's offer and gain access to a network of powerful contacts. But, with power comes responsibility. The web of corruption begins to tighten. What will you do?",
        choices: [
            { text: "Use your new connections to expand your empire quietly.", next: "underworld_network"},
            { text: "Push your luck and take out key players to solidify your control.", next: "cartel_infiltration"}
        ],background:"Assets/hold.webp"
    },
   
    "cartel_infiltration": {
        text: "You use your newfound influence to infiltrate the cartel, eliminating key players who stand in your way. The cartel is now under your control, but you must deal with the DEA’s growing interest. How will you play this dangerous game?",
        choices: [
            { text: "Expand your cartel’s operations, crushing any remaining rivals.", next: "scarface_ending" },
            { text: "Make a deal with the DEA to secure your future and avoid capture.", next: "ghost_kingpin"}
        ],
        background:"Assets/connections.webp"
    },

    "dea_closing": {
        text: "You decide to work with a corrupt cop who can help keep the DEA off your back. In exchange for his silence and protection, you’re required to give him a cut of your profits.How will you handle this new partnership?",
        choices: [
            { text: "Use your influence to expand your operations while maintaining the cop's trust.", next: "hidden_empire"},
            { text: "Betray the cop before he betrays you and eliminate him.", next: "fugitive_survival"}
        ],background:"Assets/corrupt.webp"
    },

    "hidden_empire": {
        text: "With the corrupt cop on your side, you expand your empire, operating in the shadows. The DEA remains unaware of your true activities, but the risk of getting exposed still looms. You now have more power, but how long can you keep your secret life from unraveling?",
        choices: [
            { text: "Take over a larger territory and eliminate rivals.", next: "cartel_takeover"},
            { text: "Lay low and build a hidden empire that the DEA cannot touch.", next: "paranoid_empire"}
        ],
        background:"Assets/shadows.webp"
    },

    "fugitive_survival": {
        text: "You decide to betray the cop, eliminating him before he can turn on you. However, this move makes you a fugitive—both the cartel and the DEA are now after you. What will you do next?",
        choices: [
            { text: "Go on the run and fake your death.", next: "exile_path"},
            { text: "Fight back and try to regain control of your empire.", next: "scarface_ending"}
        ],background:"Assets/betray.webp"
    },

    "exile_path": {
        text: "You successfully fake your death, leaving behind your empire and any trace of your former life. You disappear into the shadows, but the past is never truly gone. You live in constant fear of being found. What is your next move?",
        choices: [
            { text: "Start a new business in a quiet town, trying to blend in.", next: "redemption_regret"},
            { text: "Stay hidden, never to return to your old life, but always watching from the shadows.", next: "forgotten_alone"}
        ],background:"Assets/fake.webp"
    },

    "redemption_regret": {
        text: "You start over, building a legitimate business and trying to live a peaceful life.The regret weighs on you. Can you ever find peace?",
        choices: [
            { text: "Embrace your new life and let go of the past.", next: "quiet_life"},
            { text: "Return to the game, risking it all to rebuild your empire.", next: "scarface_ending"}
        ],background:"Assets/start_over.webp"
    },

    "forgotten_alone": {
        text: "You remain hidden, erasing all traces of your past life. Your name is forgotten, and you live alone, far from the world you once ruled. But deep down, you know that even in isolation, your past will always haunt you.",
        choices: [],
        
        
        background:"Assets/hide.webp"
    },

    "quiet_life": {
        text: "You choose to embrace your new, peaceful life, finally leaving behind the dangerous world of crime. You find solace in knowing you’re no longer living in fear or paranoia. You remain a quiet, inconspicuous figure, content with the simple things. The past is behind you.",
        choices: [],
        background:"Assets/free.webp"
    },

    "kingpin_rise": {
        text: "You assassinate your cartel boss, taking control of the operation. Your power grows, but so do your enemies. What is your next move?",
        choices: [
            { text: "Consolidate power within the cartel.", next: "cartel_kingpin"},
            { text: "Expand your empire into other cities.", next: "empire_expansion"}
        ],background:"Assets/boss.webp"
    },
    "cartel_kingpin": {
        text: "You've solidified your position as the new cartel kingpin. Now, you must deal with the DEA and rival cartels. What will you do?",
        choices: [
            { text: "Make a deal with the DEA to keep your operation safe.",next: "dea_closing"},
            { text: "Eliminate rival cartels and expand your territory.",next: "cartel_takeover"}
        ],background:"Assets/king.webp"
    },
    

    "empire_expansion": {
        text: "Your empire grows as you expand to new cities, but the pressure from law enforcement intensifies. What's your next move?",
        choices: [
            { text: "Go underground to protect your empire.", next: "dea_closing"},
            { text: "Keep expanding, risking everything.", next: "scarface_ending"}
        ],background:"Assets/king.webp"
    },
    "rising_pawn": {
        text: "You successfully rise in the ranks of the cartel, but the stakes are higher. What do you do?",
        choices: [
            { text: "Challenge the cartel leadership for power.", next: "scarface_ending"},
            { text: "Continue working from the shadows.", next: "ghost_kingpin"}
        ],background:"Assets/king1.webp"
    },
    "cartel_life": {
        text: "You live your life under the cartel’s thumb, constantly being controlled. Eventually, you are taken out by a rival. Game over.",
        choices: [],
        background: "Assets/rip.webp"
    }
};

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");
const backgroundContainer = document.getElementById("background-container");
const restartButton = document.getElementById("restart");
let loseContainer = null; 

function startGame() {
    showStory("start");
}

function showStory(key) {
    const scene = story[key];
    storyText.innerText = scene.text;

    if (loseContainer) {
        backgroundContainer.removeChild(loseContainer);
        loseContainer = null;
    }

    if (key === "scarface_ending") {
       
        backgroundContainer.style.backgroundImage = "";

        loseContainer = document.createElement("div");
        loseContainer.classList.add("lose-container");

        const video = document.createElement("video");
        video.src = "Assets/die.mp4"; 
        video.autoplay = true;
        video.loop = false;
        video.controls = false; 
        video.classList.add("lose-video");

        loseContainer.appendChild(video);
        backgroundContainer.appendChild(loseContainer);
    } 
    else 
    {
        backgroundContainer.style.backgroundImage = `url(${scene.background})`;
    }

    choicesDiv.innerHTML = "";

    if (scene.choices.length === 0) {
        restartButton.style.display = "block";
        return;
    }

    scene.choices.forEach(choice => {
        let btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => showStory(choice.next);
        choicesDiv.appendChild(btn);
    });
}

function restartGame() {
    if (loseContainer) {
        backgroundContainer.removeChild(loseContainer);
        loseContainer = null;
    }
    restartButton.style.display = "none";
    startGame();
}

startGame();
