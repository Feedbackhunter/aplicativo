var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        document.getElementById("startScreen_mobilebutton_2").addEventListener("click", function () {
          cordova.plugins.barcodeScanner.scan(function (value) {
            if (value >= "1" && value <= "500") {
                localStorage.setItem("resultado", value.text);
                window.location.replace("page1.html");
                $url = 'http://feedbackhunter.esy.es/formulario/?f=' + value + '&uuid=' + device.uuid;
                var ref = window.open($url, '_blank', "location=yes,closebuttoncaption=Fechar, width='400', height='800'");
                ref.addEventListener('loadstart', function(event) {
                    if (event.url.match("mobile/close")) {
                        ref.close();
                    }
                });
            }
            
          });
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
