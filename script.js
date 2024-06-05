let groupNumberSelect = document.querySelector('#group-number');
const memberNameInput = document.querySelector('#member-name');
const groupContainer = document.querySelector('#group-container');
const memberList = document.querySelector('#member-list');
const submitGroupBtn = document.querySelector('#submit-group-btn');
const submitMemberBtn = document.querySelector('#submit-member-btn');
let groupNumber = groupNumberSelect.value;
let memberArray = [];
let noMemberMsg;

groupNumberSelect.addEventListener('change', (e) => {
  groupNumber = e.currentTarget.value;
});

submitGroupBtn.addEventListener('click', (e) => {
  addGroup(e);
});

submitMemberBtn.addEventListener('click', (e) => {
  addMember(e);
  memberNameInput.value = '';
});

const checkNoMember = () => {
  if (memberArray.length == 0) {
    noMemberMsg = document.createElement('h3');
    noMemberMsg.className = 'text-lightest font-jakarta';
    noMemberMsg.textContent = 'Aucun membres ...';
    memberList.appendChild(noMemberMsg);
    console.log('yes');
  }
};

checkNoMember();

const addMember = (e) => {
  e.preventDefault();

  if (noMemberMsg) {
    noMemberMsg.remove();
  }

  if (memberNameInput.value.length) {
    let memberDiv = document.createElement('div');
    memberDiv.className = 'flex my-2 w-full justify-between';

    let memberName = document.createElement('li');
    memberName.textContent = memberNameInput.value;
    memberName.className = 'text-white font-jakarta';
    memberArray.push(memberName.textContent);

    let delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    delBtn.className = 'text-white';
    delBtn.addEventListener('click', () => {
      memberArray.forEach((member) => {
        if (member == memberName.textContent) {
          memberArray.splice(memberArray.indexOf(member), 1);
        }
      });
      memberDiv.remove();
      checkNoMember();

      console.log(memberArray);
    });

    memberDiv.appendChild(memberName);
    memberDiv.appendChild(delBtn);
    memberList.appendChild(memberDiv);
    console.log(memberArray);
  }
};

const addGroup = (e) => {
  e.preventDefault();
  groupContainer.innerHTML = '';
  shuffleArray(memberArray);
  const memberElements = Array.from(memberList.getElementsByTagName('li'));

  if (groupNumber >= memberElements.length) {
    let ErrorDiv = document.createElement('div');
    ErrorDiv.className =
      'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative';
    let ErrorMsg = document.createElement('h3');
    ErrorMsg.className = 'font-bold';
    ErrorMsg.textContent = 'Trop de groupes pour le nombre de membres';

    ErrorDiv.appendChild(ErrorMsg);
    groupContainer.appendChild(ErrorDiv);
  } else {
    let groups = [];
    for (let i = 0; i < groupNumber; i++) {
      groups.push([]);
    }

    // Ajouter les membres aux groupes
    memberArray.forEach((member, index) => {
      groups[index % groupNumber].push(member);
      console.log(groups);
    });

    groups.forEach((group, index) => {
      let groupDiv = document.createElement('div');
      groupDiv.className = 'p-3 border rounded-md w-max m-2';

      let groupTitleNumber = document.createElement('h2');
      groupTitleNumber.textContent = `Groupe ${index + 1}`;

      let memberGroup = document.createElement('ul');
      group.forEach((member) => {
        let memberItem = document.createElement('li');
        memberItem.textContent = member;
        memberGroup.appendChild(memberItem);
      });

      groupDiv.appendChild(groupTitleNumber);
      groupDiv.appendChild(memberGroup);
      groupContainer.appendChild(groupDiv);
    });
  }
};

const shuffleArray = (arr) => {
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};
