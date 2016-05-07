/*
* @Author: sahildua2305
* @Date:   2016-05-02 02:10:18
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-05-08 01:48:51
*/

$(document).on('ready', function(){

	var list_keys = ['linkedin', 'github', 'twitter', 'facebook', 'personal'];

	/**
	 * updateUI show saved links when popup page is opened by clicking on browser icon
	 */
	function updateUI(){
		for(var i in list_keys){
			var key = list_keys[i];
			console.log(key);
			var link = localStorage.getItem(key);
			console.log(link);
			if(typeof link == "string"){
				document.getElementById(key).value = link;
			}
			else{
				document.getElementById(key).value = "";
			}
		}
	}

	$("#save_links").on('click', function(e){
		console.log("Request for saving links in storage");

		document.getElementById("save_links").innerHTML = "Saving..";

		for(var i in list_keys){
			var key = list_keys[i];
			var newValue = document.getElementById(key).value;
			localStorage.setItem(key, newValue);
		}

		// trigger to show the saved links
		updateUI();

		document.getElementById("save_links").innerHTML = "Save links";
	});

	// trigger to show the saved links
	updateUI();

});