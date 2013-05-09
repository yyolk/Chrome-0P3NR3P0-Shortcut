(function($){

  var OpenrepoRedirect = function(){
    this.OpenrepoUrl = "http://0p3nr3p0.net/";
  }


  OpenrepoRedirect.prototype.redirect = function(){
    window.location.replace(this.OpenrepoUrl);
  }


  $(document).ready(function(){
    var tRedirect = new OpenrepoRedirect();
    tRedirect.redirect();
  });

})(jQuery);


