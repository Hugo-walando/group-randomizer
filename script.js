let groupNumberSelect = document.querySelector('#group-number');
let memberName = document.querySelector('#member-name');

groupNumberSelect.addEventListener('change', (e) => {
  let groupNumber = e.currentTarget.value;
  console.log(groupNumber);
});
