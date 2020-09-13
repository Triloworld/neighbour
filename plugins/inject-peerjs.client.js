import Vue from "vue";
import VuePeerJS from 'vue-peerjs';
import Peer from 'peerjs';

var crypto = require("crypto");
var id = crypto.randomBytes(20).toString('hex');

let PeerJS = new Peer(id, { debug: 3 });

Vue.use(VuePeerJS, PeerJS);

export default ({ app }, inject) => {
	inject('peer', PeerJS)
}
