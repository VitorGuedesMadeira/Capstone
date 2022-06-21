//  ----------------- Variables ------------------------- //
const menuButton = document.querySelector('.toggle-menu');
const headerTag = document.querySelector('.header-section');
const dinamicSpeakers = document.querySelector('.speakers');

// ----------------- SPEAKERS DATA ----------------------  //
const speakers = [
  {
    name: 'Elza',
    job: 'Disney Queen',
    description: 'Elsa is the perfect mythic character – magical and larger than life. Grateful her kingdom now accepts her, she works hard to be a good queen. But deep down she can’t help but wonder why she was born with powers.',
    Image: '../images/speakers/speaker1.png',
  },
  {
    name: 'Genie',
    job: 'Lamp Genie',
    description: 'The Genie is a fictional Jinn appearing in Walt Disney Pictures\' 31st animated feature film Aladdin (1992). He was voiced by Robin Williams in the first film.',
    Image: '../images/speakers/speaker2.png',
  },
  {
    name: 'Pocahontas',
    job: 'Disney Princess',
    description: 'Pocahontas is the titular protagonist of Disney\'s 1995 animated feature film of the same name.',
    Image: '../images/speakers/speaker3.png',

  },
  {
    name: 'Ralph',
    job: 'Disney Villain',
    description: 'Wreck-It Ralph is the titular protagonist of the movie series with the same name, Wreck-It Ralph. He is the main antagonist in the game Fix-It Felix, Jr. .',
    Image: '../images/speakers/speaker4.png',
  },
  {
    name: 'Lumiere',
    job: 'Candle Holder',
    description: 'Lumiere is a kind-hearted, charismatic, yet rebellious maître d\' of the Beast. Incredibly social and hospitable towards all of whom he meets, Lumiere has a habit of disobeying the firm rules of his antisocial master, frequently resulting in controversy..',
    Image: '../images/speakers/speaker5.png',
  },
  {
    name: 'Maui',
    job: 'Demigod',
    description: 'Maui is boisterous, gregarious, and mischievous. His manner of carrying himself matches his massive physique, being larger-than-life and a true god among men.',
    Image: '../images/speakers/speaker6.png',
  },
]
//  ------------------- GENERATING CARDS ---------------------- //
for(let index=0; index<speakers.length; index+=1){
// generating indivual speaker
const individualSpeaker = speakers[index];
// speaker div
const speakerDiv = document.createElement('div');
speakerDiv.setAttribute('class', 'speaker-div');
dinamicSpeakers.appendChild(speakerDiv);
// div for speaker img
const speakerImgDiv = document.createElement('div');
speakerImgDiv.setAttribute('class', 'speaker-img-div');
speakerDiv.appendChild(speakerImgDiv);
// speaker img
const speakerImg = document.createElement('img');
speakerImg.setAttribute('class', 'speaker-img')
speakerImg.setAttribute('src', individualSpeaker.Image);
speakerImgDiv.append(speakerImg);
// speaker for texts
const textsDiv = document.createElement('div');
textsDiv.setAttribute('class', 'texts-div');
speakerDiv.appendChild(textsDiv);
// speaker name
const speakerName = document.createElement('h3');
const speakerNameText = document.createTextNode(individualSpeaker.name);
speakerName.appendChild(speakerNameText);
textsDiv.appendChild(speakerName);
// speaker job
const speakerJob = document.createElement('h4');
speakerJob.setAttribute('class', 'speaker-job');
const speakerJobText = document.createTextNode(individualSpeaker.job);
speakerJob.appendChild(speakerJobText);
textsDiv.appendChild(speakerJob);
// div for row border
const speakerBorderDiv = document.createElement('div');
speakerBorderDiv.setAttribute('class', 'speaker-border-div');
textsDiv.appendChild(speakerBorderDiv);
// speaker description
const speakerDescription = document.createElement('p');
speakerDescription.setAttribute('class', 'speaker-description')
const speakerDescriptionText = document.createTextNode(individualSpeaker.description);
speakerDescription.appendChild(speakerDescriptionText);
textsDiv.appendChild(speakerDescription);
}
//  ---------------------------- TOGGLE MENU ------------------------------ //

function toggleMenu() {
  headerTag.classList.toggle('showMenu');
}

menuButton.onclick = () => {toggleMenu();};
