let groupNumberSelect = document.querySelector('#group-number');
const memberNameInput = document.querySelector('#member-name');
const groupContainer = document.querySelector('#group-container');
const memberList = document.querySelector('#member-list');
const submitGroupBtn = document.querySelector('#submit-group-btn');
const submitMemberBtn = document.querySelector('#submit-member-btn');
let groupNumber = groupNumberSelect.value;
let memberArray = [];

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

const addMember = (e) => {
  e.preventDefault();
  if (memberNameInput.value.length) {
    let memberDiv = document.createElement('div');
    memberDiv.className = 'm-2 p-1 flex w-full justify-between';

    let memberName = document.createElement('li');
    memberName.textContent = memberNameInput.value;
    memberArray.push(memberName.textContent);

    let delBtn = document.createElement('button');
    delBtn.textContent = 'Suppr';
    delBtn.addEventListener('click', () => {
      memberArray.forEach((member) => {
        if (member == memberName.textContent) {
          memberArray.splice(memberArray.indexOf(member), 1);
        }
      });
      memberDiv.remove();
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
    let ErrorMsg = document.createElement('h3');
    ErrorMsg.className = 'text-red-500';
    ErrorMsg.textContent = 'Trop de groupes pour le nombre de membres';
    groupContainer.appendChild(ErrorMsg);
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
