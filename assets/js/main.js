/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: './assets/img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
  ];
  
  
  for(let i = 0; i < team.length; i++){
    console.log(team[i])

    let array = team[i];

    document.querySelector('#box').innerHTML += `
    <div class="card p-0 border-0 shadow">
        <img src="${array.image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title my-1">${array.name}</h5>
            <p class="card-text">${array.role}</p>
        </div>
    </div>
    `
  }