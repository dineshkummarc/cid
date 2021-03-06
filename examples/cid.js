var cidSwapImages = function cidSwapImages(data) {        
  $("img[cid-src]").each(function(i, img) {
    img = $(img);
    var key = img.attr('cid-src');
    img.attr('src', data[key]);
  });
};
var cid = {
  options: {
      service: 'http://localhost:3000/bundle'
    , callback: 'cidSwapImages'
  }
};

cid.configure = function(key, value) {
  if (arguments.length == 1) {
    return cid.options[key];
  } else {
    cid.options[key] = value;
    return this;
  }  
};

cid.execute = function() {
  var imgs = $('img[cid-src]')
    , params = [];
  for (var i = 0; i < imgs.length; i++) {
    params.push(imgs[i].getAttribute('cid-src'));
  }
  
  $.ajax({
     url: cid.configure('service'),
     data: { 'root'   : window.location.protocol + '//' + window.location.host, 'images' : params.join(',') },
     dataType: "jsonp",
     jsonp : "callback",
     jsonpCallback: cid.configure('callback')
  });
};

cid.Storage = function CidStorage() {
  console.log("Instantiating Storage");
};

cid.Storage.prototype.set = function CidStorageSet(key) {
  console.log(arguments);
};

cid.Storage.prototype.get = function CidStorageGet(key, value) {
  console.log(arguments);
};
