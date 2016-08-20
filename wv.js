

$(document).ready(function() {

  $("#search-btn").click(function() {
    queryWiki($("#search-box").val());
  });

});

function populateTable(data) {
  html = '<thead><tr><th>Title</th><th>Summary</th></tr></thead><tbody>';
  for (i = 0; i < data[1].length; i++) {
      html += '<tr><td class="title-col"><a href="' + data[3][i] + '" target="_blank">' +
      data[1][i] + '</a></td><td class="desc-col">' + data[2][i] + '</td></tr>';
  }
  html += "</tbody>";
  $("#results").html(html);
}

function queryWiki(term) {
    var query = "https://en.wikipedia.org/w/api.php?" +
      "action=opensearch&limit=10&namespace=0&search=" +
      term + "&format=json&callback=?";
    console.log(query);

  $.ajax( {
    url: query,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    type: 'GET',
    success: function(data) { populateTable(data); },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR + " " + textStatus + " " + errorThrown);
    }
  });
};
