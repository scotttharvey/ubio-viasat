
if (document.querySelector('#address')) {

  const addressList = document.querySelector('#address_list');

  document.querySelector('#address').addEventListener('input', e => {
    let target = e.target.value;

    fetch(`https://us-autocomplete.api.smartystreets.com/suggest?key=17515622498784883&prefix=${target}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addressList.innerHTML = "";
      if (data.suggestions) {
        data.suggestions.forEach(address => {
          let option = document.createElement('option');
          option.value = address.text;

          addressList.appendChild(option);
        })
      }

    })
    .catch(error => console.log(error));

  })
}
