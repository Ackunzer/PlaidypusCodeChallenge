
function display() {
  $('#businesses').html("");
  //get value that user typed
  var search = $('#input').val();
  var num = $('#numResults').val();
  var apiKey = "ntVzQ8jXSKaLrXxcNqZXADpFw_06qUDFt5BpT7Ek3yY0eg0Ibx_QTrzcbogJ9THbp9Qa-mlWv0SmZI23fRmfumLvYKLsGwf5fF_eokfeBirS741rAcioK2UU5Dn_X3Yx";
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+search+"&location=Naperville&limit="+num;

  $.ajax({
    url: myurl,
    headers: {
      Authorization:'Bearer '+apiKey,
    },
    method: 'GET',
    dataType: 'json',
    success: [function(data){

      // Grab the results from the API JSON return
      var totalresults = data.total;
      // If our results are greater than 0, continue
      if (totalresults > 0){
        // Display a header on the page with the number of results
        $('#businesses').html('<h5>We discovered ' + totalresults + ' results:</h5>');
        // Itirate through the JSON array of 'businesses' which was returned by the API
        var count = 0;
        $.each(data.businesses, function(i, item) {
          // Store each business's object in a variable
          var id = item.id;
          var phone = item.display_phone;
          var image = item.image_url;
          var name = item.name;
          var rating = item.rating;
          var reviewcount = item.review_count;
          var address = item.location.address1;
          var city = item.location.city;
          var state = item.location.state;
          var zipcode = item.location.zip_code;
          var website = item.url;
          var testId = "div"+count;
          // Append our result into our page

          $('#businesses').append('<div id="bus" style="margin-top:50px;margin-bottom:50px;">' +
              '<img src="' + image + '" style="width:200px;height:150px;" alt="business image">' +
              '<br><b>'+name+'</b><br><b><button id ='+count+' class ="btn" onclick = myFunction(this.id)>View More</button></b></br></div>' +
              '<div id = '+testId+' class="test"><br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode +
              '<br>The phone number for this business is: ' + phone +
              '<br>This business has a rating of ' + rating + ' out of 5, with ' + reviewcount + ' reviews.' +
              '<br><a href='+website+'>Visit their website here<a/></br></div>');
          count=count+1;
        });
      } else {
        // If our results are 0; no businesses were returned by the JSON therefore we display on the page no results were found
        $('#businesses').append('<h5>We discovered no results.</h5>');
      }
    }]
  })
      .fail(function (q) {
        alert('Error ' + q.status);
      });
}

//load the page and use a click event to display the search
$(document).ready(function () {
  $('#bDisplay').click(display);
});

function myFunction(clicked) {
  var x = document.getElementById("div"+clicked);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}


