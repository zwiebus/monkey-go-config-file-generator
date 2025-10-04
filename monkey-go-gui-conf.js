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
}
function changeStyle() {
  let elements = document.querySelectorAll('body, .container , input , h1 , h2, .cat');
  let changeStyle = document.getElementById("changestyle");
   for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("light-mode");
   }