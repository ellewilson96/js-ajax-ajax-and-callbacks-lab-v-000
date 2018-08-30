$(document).ready(function() {
})

function searchRepositories() {
  // const search = $("#searchTerms").val()
  const search = "tetris"
  $.get(`https://api.github.com/search/repositories?q=${search}`, function(response) {
    debugger
    $("#results").html(response);
  });
}
