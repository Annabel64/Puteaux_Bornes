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
         url: "imagesMarker\\coiffeur.png",
        scaledSize: new google.maps.Size(40,30)
     }

    });


    const infowindow= new google.maps.InfoWindow({
        content:'<h3>Coiffure Wallace</h3>'
            + '<a href="Coiffure_Wallace.html">Site du coiffeur</a>'
            + '<br/><img src="imagesBoutiques\\CWallace.jpg" width="200px" />'
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
            url: "imagesMarker\\coiffeur.png",
           scaledSize: new google.maps.Size(40,30)
        }
   
       });
   
   
    const infowindow2= new google.maps.InfoWindow({
        content:'<h3>Franck Provost</h3>'
        + '<a href="">Site du coiffeur</a>'
            + '<br/><img src="imagesBoutiques\\CFP.jpg" width="200px" />'
    });
       
    marker2.addListener("click", () => {
        infowindow2.open(map,marker2);
    });

    const marker3 = new google.maps.Marker({

        position: { lat: 48.878777725188996, lng: 2.2396146792471283 },

        map,

        title: "Duplinat",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\imprimerie.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });





    const infowindow3 = new google.maps.InfoWindow({

        content: '<h2>Duplinat</h2>'

            + '<a href="duplinat.html">Site de l\'imprimerie</a>'

            + '<br/><img src="imagesBoutiques\\SDuplinat.png" width="200px" />'

    });



    marker3.addListener("click", () => {

        infowindow3.open(map, marker3);

    });





    const marker4 = new google.maps.Marker({

        position: { lat: 48.88602531218909, lng: 2.243514325251137 },

        map,

        title: "Au coin des barbus",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\barbershop.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });





    const infowindow4 = new google.maps.InfoWindow({

        content: '<h2>Au coin des barbus</h2>'

            + '<a href="au_coin_des_barbus.html">Site du barbershop</a>'

            + '<br/><img src="imagesBoutiques\\BACDB.png" width="200px" />'

    });



    marker4.addListener("click", () => {

        infowindow4.open(map, marker4);

    });



    const marker5 = new google.maps.Marker({

        position: { lat: 48.88351408517687, lng: 2.235908665838251 },

        map,

        title: "Huguito",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\restaurant.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });





    const infowindow5 = new google.maps.InfoWindow({

        content: '<h2>Huguito</h2>'

            + '<a href="">Site du restaurant</a>'

            + '<br/><img src="imagesBoutiques\\RHuguito.jpg" width="200px" />'

    });



    marker5.addListener("click", () => {

        infowindow5.open(map, marker5);

    });



    const marker6 = new google.maps.Marker({

        position: { lat: 48.87951530618819, lng: 2.2408402272709456 },

        map,

        title: "Roasty",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\restaurant.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow6 = new google.maps.InfoWindow({

        content: '<h2>Roasty</h2>'

            + '<a href="">Site du restaurant</a>'

            + '<br/><img src="imagesBoutiques\\RRoasty.jpg" width="200px" />'

    });



    marker6.addListener("click", () => {

        infowindow6.open(map, marker6);

    });



    const marker7 = new google.maps.Marker({

        position: { lat: 48.886426137335434, lng: 2.244452990969429 },

        map,

        title: "Resunga",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\restaurant.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow7 = new google.maps.InfoWindow({

        content: '<h2>Resunga</h2>'

            + '<a href="">Site du restaurant</a>'

            + '<br/><img src="imagesBoutiques\\RResunga.jpg" width="200px" />'

    });



    marker7.addListener("click", () => {

        infowindow7.open(map, marker7);

    });



    const marker8 = new google.maps.Marker({

        position: { lat: 48.88000904133866, lng: 2.239846077381422 },

        map,

        title: "The Florist",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\fleuriste.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow8 = new google.maps.InfoWindow({

        content: '<h2>The Florist</h2>'

            + '<a href="">Site du fleuriste</a>'

            + '<br/><img src="imagesBoutiques\\FTF.jpg" width="200px" />'

    });



    marker8.addListener("click", () => {

        infowindow8.open(map, marker8);

    });

    //

    const marker9 = new google.maps.Marker({

        position: { lat: 48.889560166921925, lng: 2.230884901979366 },

        map,

        title: "Fleuriste-lysianthus-Puteaux",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\fleuriste.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow9 = new google.maps.InfoWindow({

        content: '<h2>Fleuriste-lysianthus-Puteaux</h2>'

            + '<a href="">Site du fleuriste</a>'

            + '<br/><img src="imagesBoutiques\\FFLP.jpg" width="200px" />'

    });



    marker9.addListener("click", () => {

        infowindow9.open(map, marker9);

    });

    //

    const marker10 = new google.maps.Marker({

        position: { lat: 48.888361935800454, lng: 2.239112250934478 },

        map,

        title: "Pharmacie Boieldieu",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\pharmacie.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow10 = new google.maps.InfoWindow({

        content: '<h2>Pharmacie Boieldieu</h2>'

            + '<a href="">Site de la pharmacie</a>'

            + '<br/><img src="imagesBoutiques\\PPB.jpg" width="200px" />'

    });



    marker10.addListener("click", () => {

        infowindow10.open(map, marker10);

    });

    //

    const marker11 = new google.maps.Marker({

        position: { lat: 48.88202661041982, lng: 2.239426688184451 },

        map,

        title: "Elysa",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\vetementF.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow11 = new google.maps.InfoWindow({

        content: '<h2>Elysa</h2>'

            + '<a href="">Site du magasin de vêtements pour femme</a>'

            + '<br/><img src="imagesBoutiques\\VFE.jpg" width="200px" />'

    });



    marker11.addListener("click", () => {

        infowindow11.open(map, marker11);

    });

    //

    const marker12 = new google.maps.Marker({

        position: { lat: 48.880055146415486, lng: 2.236793122871394 },

        map,

        title: "Indémodable & Brocanteo",

        animation: google.maps.Animation.DROP,

        icon: {

            url: "imagesMarker\\decoration.png",

            scaledSize: new google.maps.Size(40, 30)

        }



    });



    const infowindow12 = new google.maps.InfoWindow({

        content: '<h2>Indémodable & Brocanteo</h2>'

            + '<a href="">Site de la boutique de décoration</a>'

            + '<br/><img src="imagesBoutiques\\DIB.jpg" width="200px" />'

    });



    marker12.addListener("click", () => {

        infowindow12.open(map, marker12);

    });


}


