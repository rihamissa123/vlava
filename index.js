

var _ServicesContainer=document.getElementById("servicesContainer");
for (let i = 0; i < 5; i++) {
  let _icon="screen";
  var content = `
<div class="col-lg-4">
<div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
  <div class="float-left mar-right20">
    <a href="#" class="hi-icon hi-icon-${_icon}">screen</a>
  </div>
</div>
<h3 class="text-bold">Responsive ${i}</h3>
<p>Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.</p>`;

let _div = document.createElement('div');
_div.innerHTML = content;
_div.className= 'col-lg-4 col-lg-4 icon-screen';
_ServicesContainer.appendChild(_div);
    
}