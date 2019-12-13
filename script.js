TweenMax.set("h2", {opacity:0, y:400});

function russia(){
  TweenMax.from('#Russian', 2, {y:-600});
  TweenMax.to('#rstat', 3, {opacity:1, y:0, ease:Bounce.easeOut});
}

function america(){
  TweenMax.from('#American', 2, {y:-600});
  TweenMax.to('#astat', 3, {opacity:1, y:0, ease:Bounce.easeOut});
}

function China(){
  TweenMax.from('#chinese', 2, {y:-600});
  TweenMax.to('#cstat', 3, {opacity:1, y:0, ease:Bounce.easeOut});
}

function france(){
  TweenMax.from('#French', 2, {y:-600});
  TweenMax.to('#fstat', 3, {opacity:1, y:0, ease:Bounce.easeOut});
}
