var transform = require('sdp-transform');

var sdp = transform.write({
  version: 0,
  timing: {
    start: 0,
    stop: 0,
  },
  name: '-',
  icelite: 'ice-lite',
  media: [{
    type: "audio",
    port: 9,
    protocol: 'UDP/TLS/RTP/SAVPF',
    payloads: '0'
    }
  ]});

console.log(sdp);

const sdpStr = 'v=0\r\n'
  + 'o=- 3622532974 3622532974 IN IP4 192.168.100.100\r\n'
  + 's=-\r\n'
  + 'c=IN IP4 192.168.100.100\r\n'
  + 't=0 0\r\n'
  + 'a=ice-lite\r\n'
  + 'm=audio 10018 RTP/SAVPF 0\r\n';

const parsed = transform.parse(sdpStr);

console.log(parsed);


