$("#searchButton").on("click", function(){
	var term= $("#searchTerm").val();
	var records= $("#recordNumber").val();
	var startYear=$("#start").val();
	var endYear=$("#end").val();

	var authKey= "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q="+term+"&begin_date="+startYear+"&end_date="+endYear+"&fp="+records;

 $.ajax({
 	url: queryURL,
 	method: "GET"
 }).done(function(responseNY) {
 	var results= responseNY.response.docs;
 	for(i=0; i<result.leght; i++){
 		var articleDiv= $("<div>");
 		var title= $("<h2>").text(results.headline.main);
 		var section=$("<p>").text("Section: "+results.section_name);
 		var pubDate=$("<p>").text("Publication Date: "+results.pub_date);
 		var artURL= $("<a>").text(results.web_url);

 		articleDiv.append(title);
 		articleDiv.append(section);
 		articleDiv.append(pubDate);
 		articleDiv.append(artURL);
 		
 		$("#resultsHere").append(articleDiv);
 	}

 });

});

$("#clearButton").on("click", function(){
	$("#searchTerm").val(" ");
	$("#recordNumber").val(" ");
	$("#start").val(" ");
	$("#end").val(" ");

});
