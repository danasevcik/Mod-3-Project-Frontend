document.addEventListener('DOMContentLoaded', function() {
  console.log('hi');

  categoryAdapter.fetch()
    .then(categories => console.log(categories));
});