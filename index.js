$(function() {

  var xAxis = $('#x_axis');
  var yAxis = $('#y_axis');
  var zAxis = $('#z_axis');
  var alpha = $('#alpha');
  var beta = $('#beta');
  var gamma = $('#gamma');
  var distLbl = $('#dist');
  var velLbl = $('#vel');
  var stack = $('#stack');

  var start = $('#start');
  var stop = $('#stop');

  var dist = 0;

  var storage = [];
  var max = 20;

  var startTime;
  var tracker = function(e) {
      o = e.acceleration;//e.accelerationIncludingGravity;
      xAxis.html(o.x.toFixed(2));
      yAxis.html(o.y.toFixed(2));
      zAxis.html(o.z.toFixed(2));

      //alpha.html(o.alpha);
      //beta.html(o.beta);
      //gamma.html(o.gamma);

      var totalTime = (Date.now() - startTime)/1000.0;
      velLbl.html((dist/totalTime).toFixed(2) + "in/s");

      dist = prevDist/totalTime + o.x * 0.5*Math.pow(e.interval / 1000, 2)
      distLbl.html((dist * 3.28084 * 12).toFixed(2) + "in   ("+e.interval+"ms)");
    

      //stack.html(stack.html()+"<br />"+o.x);
      //if (totalTime >= 1000) {
      //  window.removeEventListener('devicemotion', tracker);
      //}
    };

  start.on('click', function() {
    dist = 0;
    startTime = Date.now(); 
    stack.html("a");
    window.addEventListener('devicemotion', tracker);
  });

  stop.on('click', function() {
    //gyro.stopTracking();
    window.removeEventListener('devicemotion', tracker);
  });

});


