<!------- hide the script from old browsers

// mouseover check
browser_name = navigator.appName;
browser_version = parseFloat(navigator.appVersion); 
if (browser_name == "Netscape" && 
  browser_version >= 3.0) { okMouse = true; }
else if (browser_name == "Microsoft Internet Explorer" && 
  browser_version >= 3.0) { okMouse = true; }
else if (browser_version >= 4.0) { okMouse = true; }
else { okMouse = false; }

var howMany = Pix.length - 1;
var PicCurrentNum = 0;
var PicCurrent = new Image();
PicCurrent.src = Pix[PicCurrentNum];
total_slides = Pix.length;

function slideshow(what) {
  if (okMouse) {
    if (what == "n") { // next slide
      PicCurrentNum++; 
      if (PicCurrentNum > howMany) { PicCurrentNum = howMany; }
    }
    else if (what == "p") { // previous slide
      PicCurrentNum--;  
      if (PicCurrentNum < 0) { PicCurrentNum = 0; }
    }
    else if (what == "f") { // first slide
      PicCurrentNum = 0; 
    }
    else if (what == "l") { // first slide
      PicCurrentNum = howMany; 
    }
    else { PicCurrentNum = 0; }
    PicCurrent.src = Pix[PicCurrentNum];
    document["ChangingPix"].src = PicCurrent.src;
    document.slides.slide.value = PicCurrentNum + 1;
  }
}

//close off comment to hide this script from old browsers----------->

