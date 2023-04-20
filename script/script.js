//menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

//contact page
  function ds_show(){
    window.document.images[2].src='../media/ds(tr).png';
    document.getElementById('discord').style.opacity = "0.2"
}

function ds_hide(){
    window.document.images[2].src='../media/ds.jpg';
    document.getElementById('discord').style.opacity = "1"
}

function yt_show(){
  window.document.images[1].src='../media/yt(tr).png';
  document.getElementById('youtube').style.opacity = "0.6"
}

function yt_hide(){
  window.document.images[1].src='../media/yt.png';
  document.getElementById('youtube').style.opacity = "1";
}