

var _ServicesContainer=document.getElementById("servicesContainer");


fetch("http://localhost:3000/services")
.then(response=>response.json())
.then(json=>{
  for (let i = 0; i <json.length; i++) {
    let _icon="screen";
    var content = `
  <div class="col-lg-4">
  <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
    <div class="float-left mar-right20">
      <a href="#" class="hi-icon hi-${json[i].icon}">screen</a>
    </div>
  </div>
  <h3 class="text-bold">${json[i].title}</h3>
  <p>Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.</p>`;
  
  let _div = document.createElement('div');
  _div.innerHTML = content;
  _div.className= 'col-lg-4 col-lg-4 icon-screen';
  _ServicesContainer.appendChild(_div);

}})

    
