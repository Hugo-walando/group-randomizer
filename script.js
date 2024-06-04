let groupNumberSelect = document.querySelector('#group-number');
const memberName = document.querySelector('#member-name');
const groupContainer = document.querySelector('#group-container');
let submitBtn = document.querySelector('#submit-btn');
let groupNumber = groupNumberSelect.value;

groupNumberSelect.addEventListener('change', (e) => {
  groupNumber = e.currentTarget.value;
  console.log(groupNumber);
});

submitBtn.addEventListener('click', (e) => {
  groupContainer.innerHTML = '';
  e.preventDefault();
  for (let i = 1; i <= groupNumber; i++) {
    let groupDiv = document.createElement('div');
    groupDiv.className = 'p-3 border rounded-md w-max';

    let groupTitleNumber = document.createElement('h2');
    groupTitleNumber.textContent = `Groupe ${i}`;

    let memberGroup = document.createElement('li');
    memberGroup.textContent = memberName.value;

    groupDiv.appendChild(groupTitleNumber);
    groupDiv.appendChild(memberGroup);
    groupContainer.appendChild(groupDiv);
  }
});
