const speakers = [
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',

  },
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',
  },
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',

  },
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',
  },
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',
  },
  {
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    Image: '../images/speakers/speaker_01.png',
  },
]

const dinamicSpeakers = document.querySelector('.speakers')

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
