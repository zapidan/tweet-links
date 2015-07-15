'use strict';

app.filter('urlFilter', function () {
  return function (link) {
    var result;
    var startUrl = "http://";
    if (link.startsWith("www")) {
      result = startUrl + link;
    }
    else if(link.startsWith("http")) {
      result = link;
    }
    else {
      result = startUrl + "www." + link;
    }

    return result;
  };
});

String.prototype.startsWith = function (str) {
  return this.indexOf(str) == 0;
}


