function toggleNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar row") {
    x.className += " extended";

  } else {
    x.className = "navbar row";
  }
}

function submitForm(form) {
  var content = document.getElementsByTagName("main")[0]

  var nume = form["nume"].value
  var prenume = form["prenume"].value
  var tel = form["tel"].value
  var cerere = form["cerere"].value.split('\\').pop()
  var nastere = form["nastere"].value.split('\\').pop()
  var buletin = form["buletin"].value.split('\\').pop()
  var absolvire = form["absolvire"].value.split('\\').pop()


  content.innerHTML = `<h3>Formularul a fost trimis cu succes continind urmatoarelel date:</h3><ol>
    <li>Nume: ${nume}</li>
<li>Prenume: ${prenume}</li>
<li>Telefon: ${tel}</li>
<li>Cerere: ${cerere}</li>
<li>Certificat de Nastere: ${nastere}</li>
<li>Buletin de Identitate: ${buletin}</li>
<li>Certificat de Absolvire: ${absolvire}</li>
</ol>
<p>Intoarce-te pe pagina <a href='index.html'>principala.</a>`

  return form
}
