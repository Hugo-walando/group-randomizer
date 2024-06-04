let groupNumberSelect = document.querySelector('#group-number');
const memberNameInput = document.querySelector('#member-name');
const groupContainer = document.querySelector('#group-container');
const memberList = document.querySelector('#member-list');
const submitGroupBtn = document.querySelector('#submit-group-btn');
const submitMemberBtn = document.querySelector('#submit-member-btn');
let groupNumber = groupNumberSelect.value;

groupNumberSelect.addEventListener('change', (e) => {
  groupNumber = e.currentTarget.value;
  console.log(groupNumber);
});

submitGroupBtn.addEventListener('click', (e) => {
  addGroup(e);
});

submitMemberBtn.addEventListener('click', (e) => {
  addMember(e);
  console.log(memberNameInput.value);
  memberNameInput.value = '';
});

const addMember = (e) => {
  e.preventDefault();
  let memberDiv = document.createElement('div');
  memberDiv.className = 'm-2 p-1 flex w-full justify-between';

  let memberName = document.createElement('li');
  memberName.textContent = memberNameInput.value;

  let delBtn = document.createElement('button');
  delBtn.textContent = 'Suppr';
  delBtn.addEventListener('click', () => {
    memberDiv.remove();
  });

  memberDiv.appendChild(memberName);
  memberDiv.appendChild(delBtn);
  memberList.appendChild(memberDiv);
};

const addGroup = (e) => {
  e.preventDefault();
  groupContainer.innerHTML = '';
  const memberElements = Array.from(memberList.getElementsByTagName('li'));

  if (groupNumber >= memberElements.length) {
    console.log('pijg');
    let ErrorMsg = document.createElement('h3');
    ErrorMsg.className = 'text-red-500';
    ErrorMsg.textContent = 'Trop de groupes pour le nombre de membres';
    groupContainer.appendChild(ErrorMsg);
    console.log(ErrorMsg);
  } else {
    for (let i = 1; i <= groupNumber; i++) {
      let groupDiv = document.createElement('div');
      groupDiv.className = 'p-3 border rounded-md w-max';

      let groupTitleNumber = document.createElement('h2');
      groupTitleNumber.textContent = `Groupe ${i}`;

      let memberGroup = document.createElement('ul');

      //   ajouter les membres au groupe de manière aléatoire

      groupDiv.appendChild(groupTitleNumber);
      groupDiv.appendChild(memberGroup);
      groupContainer.appendChild(groupDiv);
    }
  }
};
