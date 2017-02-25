$("#searchButton").on("click", function(event){
	event.preventDefault();
	var term= $("#searchTerm").val().trim();
	var records= $("#recordNumber").val();
	var startYear=$("#start").val().trim().toString();
	var endYear=$("#end").val().trim().toString();
	var word= encodeURI(term);

	var authKey= "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q="+word+"&begin_date="+startYear+"0101"+"&end_date="+endYear+"1231"+"&fp="+records+"?hl=true";

 $.ajax({
 	url: queryURL,
 	method: "GET"
 }).done(function(responseNY) {
 	var results= responseNY.response.docs;
 	$("#resultsHere").empty();
 	for(i=0; i<results.length; i++){
 		var articleDiv= $("<div>");
 		var title= $("<h2>").text(results[i].headline.main);
 		var section=$("<p>").text("Section: "+results[i].section_name);
 		var pubDate=$("<p>").text("Publication Date: "+results[i].pub_date);
 		var artURL= $("<a>").text(results[i].web_url);

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
