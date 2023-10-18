//Initialize and add the map
// function initMap(){
//   const loc={ lat:42.361145, lng:-71.057083};
//   //Centered map on location
//   const map=new google.maps.Map(document.querySelector('map'),
//   {
//     zoom:14,
//     center:loc
//   });
//   //The marker, positioned at location
//   const marker=new google.maps.Marker({position:loc, map:
//   map});
// }

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.querySelector(".map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();


//smooth scroling

$('#navbar a, .btn').on('click', function(event){
  if(this.hash !==''){
    event.preventDefault();

    const hash=this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-100
      },
      800
    );
  }
});