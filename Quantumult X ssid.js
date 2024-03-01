let ssid = $network.wifi.ssid;
let proxy = "DIRECT"; 

if (ssid !== "ROMA-5G") {
    proxy = "Proxy"; 
}

let result = {
    policy: proxy
};

$done(result);
