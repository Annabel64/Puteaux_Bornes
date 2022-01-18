let map;

function initMap() {
    map=new google.maps.Map(document.getElementById('map'),{
    center :{lat:48.88136809116729 ,lng:2.243319623928298},
    zoom:16,
    mapId: '20ffa254f66d015d'
    });

    const marker = new google.maps.Marker({
     position: {lat:48.8800542741571,lng:2.239071648589728},
     map,
     title: "Coiffure Wallace",
     animation: google.maps.Animation.DROP,
     icon: {
        url: "coiffeur.png",
        scaledSize: new google.maps.Size(40,30)
     }

    });


    const infowindow= new google.maps.InfoWindow({
        content:'<h3>Coiffure Wallace</h3>'
        + '<a href="">Site du coiffeur</a>'
        + '<br/><img src="CWallace.jpg" width="200px" />'
    });
    
    marker.addListener("click", () => {
        infowindow.open(map,marker);
    });

    const marker2 =new google.maps.Marker({
        position: {lat:48.88182195211895,lng: 2.239148272236986},
        map,
        title: "Franck Provost",
        animation: google.maps.Animation.DROP,
        icon: {
           url: "coiffeur.png",
           scaledSize: new google.maps.Size(40,30)
        }
   
       });
   
   
    const infowindow2= new google.maps.InfoWindow({
        content:'<h3>Franck Provost</h3>'
        + '<a href="">Site du coiffeur</a>'
        + '<br/><img src="CFP.jpg" width="200px" />'
    });
       
    marker2.addListener("click", () => {
        infowindow2.open(map,marker2);
    });
}


