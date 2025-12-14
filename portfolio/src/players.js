const footballTeam = {
  team: "England National Team",
  year: 2025,
  headCoach: "Gareth Southgate",
  players: [
    {
      name: "Harry Kane",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Jude Bellingham",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Declan Rice",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Bukayo Saka",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Phil Foden",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "John Stones",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Harry Maguire",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Kyle Walker",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Trent Alexander-Arnold",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Jack Grealish",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jordan Pickford",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Aaron Ramsdale",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Dean Henderson",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Marc Guehi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ben Chilwell",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Reece James",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Conor Gallagher",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Cole Palmer",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Eberechi Eze",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ollie Watkins",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Marcus Rashford",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Noni Madueke",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Kobbie Mainoo",
      position: "midfielder",
      isCaptain: false
    }
  ]
};
const teamName = document.getElementById('team-name');
teamName.textContent = footballTeam.team;
const teamYear = document.getElementById('year');
teamYear.textContent = footballTeam.year;
const coachName = document.getElementById('coach');
coachName.textContent = footballTeam.headCoach;



const allTeammates = document.getElementById('team-mates');
let displayContainer = document.getElementById('player-display');
const defaultPlayer = function (allPlayers) {
    displayContainer.innerHTML = '';
  allPlayers.forEach((players) => {
    const allPlayersName =  `<div class='player-card'><p>${players.isCaptain ? '(Captain)': ''} ${players.name}</p> <p>position: ${players.position}</p>`;
    displayContainer.innerHTML+=allPlayersName
  });
}
defaultPlayer(footballTeam.players);
const eventHandler = function (event) {
  let selectedValue = event.target.value;
  let playersTorender = footballTeam.players;
  if (selectedValue === 'all players') {
defaultPlayer(footballTeam.players); 
  }else if (selectedValue === 'position Forward') {
     playersTorender = playersTorender.filter((p)=>{
     return p.position === 'forward'
     })
  }else if (selectedValue === 'position Midfielder') {
     playersTorender = playersTorender.filter((p)=>{
     return p.position === 'midfielder'
     })
  }else if (selectedValue === 'position Defender') {
    playersTorender = playersTorender.filter((p)=>{
      return p.position === 'defender'
    }) 
  }else if (selectedValue === 'position goalkeeper') {
  playersTorender = playersTorender.filter((p)=>{
   return p.position === 'goalkeeper'
  })
  }
  defaultPlayer(playersTorender)
}
allTeammates.addEventListener('change',eventHandler);





