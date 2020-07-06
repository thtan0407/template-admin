jQuery(document).ready(function($){
    //select2
    if($('.select2').length){
        $('select.select2').select2({});
    }
    

    
    //Show/Hide scroll-top on Scroll
    // hide #back-top first
	$("#scroll-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-top').fadeIn();
            } else {
                $('#scroll-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#scroll-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    });
    // collapse handle
    $(document).on('click', '[data-click="collapse"]', function(e){
        e.preventDefault();
        let sID = $(this)[0].getAttribute('href');
        $(sID).is(':visible') ? $(sID).stop().slideUp(function(){}) : $(sID).stop().slideDown(function(){}) ;
        
    });
    $(document).on('click', '[data-click="close-collapse"]', function(e){
        e.preventDefault();
        let sID = $(this)[0].getAttribute('href');
        $(sID).slideUp(function(){});
    });
    
    
    // open sec side menu
    $(document).on('click', '#addnewButton' ,function(e){
        $('#menu-add-new').addClass('open');
    });
    $(document).on('click', '#bookButton' ,function(e){
        $('#menu-book').addClass('open');
    });
    
    //close sec side menu
    $(document).on('click', '.menu-overlay' ,function(e){
        let $menu = $(this).closest('.sec-menu-side');
        $menu.removeClass('open');
    });
    
    $('.navbar-toggle').on('click',function(e){
        $(this).toggleClass('open');
        $('body').toggleClass('menuin');
    });
    $('.nav-overlay').on('click',this,function(e){
        $('.navbar-toggle').trigger('click');
    });
    
//    $('.collapse').on('click','.collapse-heading',function(){
//        var container = $(this).parent('.collapse');
//        $(container).siblings().removeClass('on').find('.collapse-body').slideUp();
//        $(container).find('.collapse-body').is(':visible')  ?  
//        $(container).removeClass('on').find('.collapse-body').slideUp() :
//        $(container).addClass('on').find(':hidden').slideDown() ;
//        
//    });
    $(window).scrollTop() > $("#header").height() ? $("#header").addClass("sticky") : $("#header").removeClass("sticky");
    $(window).scroll(function () {
        $(window).scrollTop() > $("#header").height() ? $("#header").addClass("sticky") : $("#header").removeClass("sticky");
    });
    


});

function loadGoogleMap(){
                var mapElement = document.getElementById('map-canvas');
                 if(mapElement == null) return;
         google.maps.event.addDomListener(window, 'load', initmap);
         var infowindow = new google.maps.InfoWindow({
            size: new google.maps.Size(150, 50)
        });
    var map;
    var gmarkers = [];
    function createMarker(latlng, title) {
        var marker = new google.maps.Marker({
            position: latlng,
            title: 'Mona Meida',

        });
        infowindow.setContent(title);
        infowindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(title);
            infowindow.open(map, marker);
        });
        gmarkers.push(marker);
        return marker;
    }
    function callinfobox(i) {
        google.maps.event.trigger(gmarkers[i], "click");
    }
    function deleteMarkers() {
        clearMarkers();
        gmarkers = [];
      }
    // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < gmarkers.length; i++) {
          gmarkers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }
    function initmap() {
        var myLatlng = new google.maps.LatLng(10.78572,106.66642);
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true,
            draggable: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.TOP_RIGHT
          },
            // The latitude and longitude to center the map (always required)
            center: myLatlng,
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        };
    

    // Create the Google Map using our element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);
        createMarker(myLatlng,'<a href="https://mona-media.com/dich-vu/thiet-ke-website-chuyen-nghiep/" title="Công ty thiế kế website chuyên nghiệp">Thiết kế website</a>&nbsp;<img src="http://mona-media.com/logo.png" style="width:20px;vertical-align:sub" alt="MonaMedia"> <strong>Mona Media</strong>').setMap(map);



    }
             }