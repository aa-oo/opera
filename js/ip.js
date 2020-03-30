//获取内网ip

var IP;
function getIPs() {
    let _this = this;
    var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    if (RTCPeerConnection) (function () {
        var rtc = new RTCPeerConnection({ iceServers: [] });
        if (1 || window.mozRTCPeerConnection) {
            rtc.createDataChannel('', { reliable: false });
        };

        rtc.onicecandidate = function (evt) {
            if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
        };
        rtc.createOffer(function (offerDesc) {
            grepSDP(offerDesc.sdp);
            rtc.setLocalDescription(offerDesc);
        }, function (e) { console.warn("offer failed", e); });


        var addrs = Object.create(null);
        addrs["0.0.0.0"] = false;
        function updateDisplay(newAddr) {
            if (newAddr in addrs) return;
            else addrs[newAddr] = true;
            var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
            for (var i = 0; i < displayAddrs.length; i++) {
                if (displayAddrs[i].length > 16) {
                    displayAddrs.splice(i, 1);
                    i--;
                }
            }
            console.log('内网ip', displayAddrs[0]);      //打印出内网ip
            checkIP(displayAddrs[0]);

            IP = displayAddrs[0];//获取内网ip
        }
        function checkIP(Ip) {
            var ipAddr = Ip.substring(0, Ip.lastIndexOf('.'));
            console.log(ipAddr);
            var i = 0;
            var t=0;
            
            time = setInterval(function getip() {
                if (i <= 225) {
                    function loadXMLDoc() {
                        var xmlhttp;
                        ipAdd = ipAddr + "." + i;
                        i++;
                        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                            xmlhttp = new XMLHttpRequest();
                        }
                        else {// code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            	t++;
                            	console.log(t);
                                localStorage.setItem("ip"+t, xmlhttp.responseURL);
 //                            alert(localStorage.getItem("ip"+t).substring(7,20));

								

                                console.log(xmlhttp.responseURL);
//                              window.clearInterval(time);
                            }
                        }
                        xmlhttp.open("GET", "http://" + ipAdd + ":8888/test", true);
                        xmlhttp.send(ipAdd);
                    }
                    loadXMLDoc();
                }
                
                else {
                    clearInterval(time);
                }
                localStorage.setItem("t", t);
            }, 200);
            


        }

        function grepSDP(sdp) {
            var hosts = [];
            sdp.split('\r\n').forEach(function (line, index, arr) {
                if (~line.indexOf("a=candidate")) {
                    var parts = line.split(' '),
                        addr = parts[4],
                        type = parts[7];
                    if (type === 'host') updateDisplay(addr);
                } else if (~line.indexOf("c=")) {
                    var parts = line.split(' '),
                        addr = parts[2];
                    updateDisplay(addr);
                }
            });
        }
        var offCanvasSide=document.getElementById('offCanvasSide');
		offCanvasSide.style.visibility='hidden';

         mui.init({
									subpages:[{
   										url:'try.html',
										id:'try.html',
    									styles:{
      										top:'45px',//mui标题栏默认高度为45px；
      										bottom:'0px'//默认为0px，可不定义；
    									}
									}]
								});
    })();
    else {
        console.log("请使用主流浏览器：chrome,firefox,opera,safari");
    }
     
}


