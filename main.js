// Copyright (c) 2016 Caroline Lee Xiang Ying. All rights reserved. 


// initiate Skrollr 
( function( $ ) {
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );