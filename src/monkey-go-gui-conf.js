// * @ package monkey-go-config-file-generator
// * @ author zwiebus

const dropdown = document.getElementById("select_target");
  dropdown.addEventListener("change", function() {
  const selectedValue = dropdown.value;
  document.getElementById("pgEXECUTE").value = 'target = '+ dropdown.value +'';
   let executed = document.getElementById("executed");
   let sabnzbd = document.getElementById("sabnzbd");
   let nzbget = document.getElementById("nzbget");
   let synologydls = document.getElementById("synologydls");
   let execute = document.getElementById("pgEXECUTE");
     if(execute.value.includes('EXECUTE')) {
         executed.style.display = 'block';
         nzbget.style.display = 'none';
         synologydls.style.display = 'none';
         sabnzbd.style.display = 'none';
      } else if(execute.value.includes('SABNZBD')) {
         sabnzbd.style.display = 'block';
         nzbget.style.display = 'none';
         synologydls.style.display = 'none';
         executed.style.display = 'none';
      } else if(execute.value.includes('NZBGET')) {
         nzbget.style.display = 'block';
         sabnzbd.style.display = 'none';
         synologydls.style.display = 'none';
         executed.style.display = 'none';
      } else if(execute.value.includes('SYNOLOGYDLS')) {
         synologydls.style.display = 'block';
         sabnzbd.style.display = 'none';
         nzbget.style.display = 'none';
         executed.style.display = 'none';
      }
});
function changeValue(event) {
   let selectElement = event.target;
   let value = selectElement.value;
   event.target.previousElementSibling.value = value;
}
function combine(event) {
   let inputElement = event.target;
   let value = inputElement.value;
   let value2 = event.target.nextElementSibling.value;
   event.target.previousElementSibling.value = value2 + value;
}
function nossl() {
  let nossl = document.getElementById("pgportdir");
   if(nossl.value.includes('119')) {
   document.getElementById("pgssldir").value = 'ssl = false';
   document.getElementById("ssl").value = 'ssl = false';
   } else if(nossl.value.includes('563') || nossl.value.includes('443')) {
   document.getElementById("pgssldir").value = 'ssl = true';
   document.getElementById("ssl").value = 'ssl = true';
   }
}
function ssltrue() {
  let ssltrue = document.getElementById("pgssldir");
   if(ssltrue.value.includes('false')) {
   document.getElementById("pgportdir").value = 'port = 119';
   document.getElementById("port").value = 'port = 119';
   } else if(ssltrue.value.includes('true')) {
   document.getElementById("pgportdir").value = 'port = 563' || 'port = 443';
   document.getElementById("port").value = 'port = 563' || 'port = 443';
   }
}
function changeValueAndSSL(event) {
   changeValue(event);
   nossl();
}
function changeValueAndPort(event) {
   changeValue(event);
   ssltrue();
}
function getData() {
  let pg = {};
  let inputs = document.forms['pg'];
   for(let i = 0; i < inputs.length; i++) {
     if(inputs[i].name.match(/^pg/)) {
     pg[inputs[i].name] = inputs[i].value;
     }
   }
   pg['pgconfig'] = template[template.type];
    for(let key in pg) {
     pattern = new RegExp("%" + key + "%", "gi");
     pg['pgconfig'] = pg['pgconfig'].replace(pattern, pg[key]);
    }
  document.getElementById('pgconfig').innerText = pg['pgconfig'];
}
function safeConfig() {
  const values = document.getElementById("pgconfig").innerText;
  let blob = new Blob([values], {type: "text/plain",endings:'native'});
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
   if (navigator.appVersion.indexOf('Win') != -1){
    link.download = "config.txt";
   } else if (navigator.appVersion.indexOf('X11') != -1) {
    link.download = "nzb-monkey-go.conf";
   } else if (navigator.appVersion.indexOf('Linux') != -1) {
    link.download = "nzb-monkey-go.conf";
   } else {
    link.download = "config.txt";
   }
  link.click();
}
function scrollToTop() {
  window.scrollTo(0, 0);
}
function clearConfig() {
  document.getElementById('pgconfig').innerText = '';
  document.getElementById('pg').reset();
  let executed = document.getElementById("executed");
  let sabnzbd = document.getElementById("sabnzbd");
  let nzbget = document.getElementById("nzbget");
  let synologydls = document.getElementById("synologydls");
  executed.style.display = 'block';
  nzbget.style.display = 'none';
  synologydls.style.display = 'none';
  sabnzbd.style.display = 'none';
  scrollToTop();
}
function changeStyle() {
  let elements = document.querySelectorAll('body, .container , .slider , input , h1 , h2, .cat, .help');
  let changeStyle = document.querySelector("#changestyle");
   for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("light-mode");
   }
   let element = document.querySelector('.container');
    if (element.classList.contains('light-mode')) {
     changeStyle.classList.remove("sun");
     changeStyle.classList.add("moon");
    } else {
     changeStyle.classList.remove("moon");
     changeStyle.classList.add("sun");
    }
}
function setCursor(){
 let inputField = document.querySelectorAll('#comb');
  for (let i = 0; i < inputField.length; i++) {
  inputField[i].setSelectionRange(1, 1);
  }
}
