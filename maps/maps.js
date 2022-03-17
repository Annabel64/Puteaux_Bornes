//#region initmap
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.88438603055488, lng: 2.2378334065649295 },
        zoom: 15,
        mapId: '20ffa254f66d015d'

    });
    setMarkerIci();
}
function initMapMarker() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.88438603055488, lng: 2.2378334065649295 },
        zoom: 15,
        mapId: '20ffa254f66d015d'
    });
    setMarkerAll();
    setMarkerIci();
}

function initMapTrajetCW() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.88438603055488, lng: 2.2378334065649295 },
        zoom: 15,
        mapId: '20ffa254f66d015d'
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}
//#endregion




//#region Marker
function setMarkerIci() {

    const marker12 = new google.maps.Marker({
        position: { lat: 48.88438603055488, lng: 2.2378334065649295 },
        map,
        title: "ici",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "imagesMarker\\ici.png",
            scaledSize: new google.maps.Size(50, 40)
        }

    });
}

function setMarkerCoiffeur() {

    const marker = new google.maps.Marker({
        position: { lat: 48.8800542741571, lng: 2.239071648589728 },
        map,
        title: "Coiffure Wallace",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "imagesMarker\\coiffeur.png",
            scaledSize: new google.maps.Size(40, 30)
        }

    });


    const infowindow = new google.maps.InfoWindow({
        content: '<h2>Coiffure Wallace</h2>'
            + '<a href="../Boutiques/coiffure_Wallace.html">Site du coiffeur</a>'
            + '<br/><img src="../images/CWallace.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajetCW();">'
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });



    const marker2 = new google.maps.Marker({
        position: { lat: 48.88182195211895, lng: 2.239148272236986 },
        map,
        title: "Franck Provost",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "imagesMarker\\coiffeur.png",
            scaledSize: new google.maps.Size(40, 30)
        }

    });


    const infowindow2 = new google.maps.InfoWindow({
        content: '<h2>Franck Provost</h2>'
            + '<a href="../Boutiques/franck_provost.html">Site du coiffeur</a>'
            + '<br/><img src="../images/CFP.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker2.addListener("click", () => {
        infowindow2.open(map, marker2);
    });

}

function setMarkerImprimerie() {

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
            + '<a href="../Boutiques/duplinat.html">Site de l\'imprimerie</a>'
            + '<br/><img src="../images/IDuplinat.png" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker3.addListener("click", () => {
        infowindow3.open(map, marker3);
    });
}

function setMarkerRestaurant() {
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
            + '<a href="../Boutiques/huguito.html">Site du restaurant</a>'
            + '<br/><img src="../images/RHuguito.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
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
            + '<a href="../Boutiques/roasty.html">Site du restaurant</a>'
            + '<br/><img src="../images/RRoasty.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
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
            + '<a href="../Boutiques/resunga.html">Site du restaurant</a>'
            + '<br/><img src="../images/RResunga.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker7.addListener("click", () => {
        infowindow7.open(map, marker7);
    });
}

function setMarkerFleuriste() {

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
            + '<a href="../Boutiques/the_florist.html">Site du fleuriste</a>'
            + '<br/><img src="../images/FTF.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
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
            + '<a href="../Boutiques/fleuriste_lysanthus.html">Site du fleuriste</a>'
            + '<br/><img src="../images/FFLP.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker9.addListener("click", () => {
        infowindow9.open(map, marker9);
    });
}

function setMarkerBarberShop() {
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
            + '<a href="../Boutiques/au_coin_des_barbus.html">Site du barbershop</a>'
            + '<br/><img src="../images/BACDB.png" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker4.addListener("click", () => {
        infowindow4.open(map, marker4);
    });
}

function setMarkerPharmacie() {
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
            + '<a href="..Boutiques/pharmacie_boieldieu.html">Site de la pharmacie</a>'
            + '<br/><img src="../images/PPB.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker10.addListener("click", () => {
        infowindow10.open(map, marker10);
    });
}

function setMarkerMode() {
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
            + '<a href="..Boutiques/elysa.html">Site du magasin de v�tements pour femme</a>'
            + '<br/><img src="../images/VFE.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker11.addListener("click", () => {
        infowindow11.open(map, marker11);
    });
}

function setMarkerDecoration() {
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
            + '<a href="..Boutiques/indemodable.html">Site de la boutique de décoration</a>'
            + '<br/><img src="../images/DIB.jpg" width="200px" />'
            + '<br/><input type="button" id="btnClick10" value="Afficher le trajet" style="height:50px; width:200px" onclick="ClickTrajet();">'
    });

    marker12.addListener("click", () => {
        infowindow12.open(map, marker12);
    });
}

function setMarkerAll() {
    setMarkerCoiffeur();
    setMarkerImprimerie();
    setMarkerRestaurant();
    setMarkerFleuriste();
    setMarkerBarberShop();
    setMarkerPharmacie();
    setMarkerMode();
    setMarkerDecoration();
}
//#endregion

//#region click
function ClickCoiffeur() {
    initMap();
    setMarkerCoiffeur();
};

function ClickImprimerie() {
    initMap();
    setMarkerImprimerie();
};

function ClickRestaurant() {
    initMap();
    setMarkerRestaurant();
};

function ClickFleuriste() {
    initMap();
    setMarkerFleuriste();
};

function ClickBarberShop() {
    initMap();
    setMarkerBarberShop();
};

function ClickPharmacie() {
    initMap();
    setMarkerPharmacie();
};

function ClickMode() {
    initMap();
    setMarkerMode();
};

function ClickDecoration() {
    initMap();
    setMarkerDecoration();
};

function ClickReinitialiser() {
    initMap();
    setMarkerAll();
};
//#endregion


function ClickTrajetCW() {
    initMapTrajetCW();
    setMarkerIci();
    setMarkerCoiffeur();

};


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;

    directionsService
        .route({
            origin: { lat: 48.88438603055488, lng: 2.2378334065649295 },
            destination: { lat: 48.8800542741571, lng: 2.239071648589728 },
            travelMode: google.maps.TravelMode[selectedMode],
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}