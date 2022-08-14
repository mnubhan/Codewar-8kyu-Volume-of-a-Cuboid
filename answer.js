class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}


Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if(l<=0 || w<=0 ||h <= 0)  return 0;
    
    return l*w*h;
  };

  return Kata;

})();

const Kata = {
  getVolumeOfCuboid : (length, width, height) => length * width * height
}
