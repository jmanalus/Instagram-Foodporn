	$.ajax({
    	type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/olympics/media/recent?client_id=a1e154a45ecf48d3a885f833fa56576d&access_token=b5e9ddd743954bf0968b05c40cb40f3b",
        success: function(data) {
			$(".instagram h3").show();
            for (var i = 0; i < 12; i++) {
		        $(".instagram").append("<a class='fancybox' rel='group' target='_blank' href='" + data.data[i].images.standard_resolution.url +"'><img src='" + data.data[i].images.thumbnail.url +"' /></a>");   
      		}
      		$(".fancybox").fancybox({
      			fixed: true
      		});                 
        }
    });




