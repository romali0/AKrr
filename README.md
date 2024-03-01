let ssid = $network.wifi.ssid;
let proxy = "DIRECT"; // 默认直连

if (ssid !== "你的家庭Wi-Fi名称") {
    proxy = "Proxy"; // 非家庭网络使用代理
}

let result = {
    policy: proxy
};

$done(result);
