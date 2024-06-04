let groupNumberSelect = document.querySelector('#group-number');

groupNumberSelect.addEventListener('change', (e) => {
  let groupNumber = e.currentTarget.value;
  console.log(groupNumber);
});
