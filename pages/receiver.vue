<template>
	<div>
		<h1>Reciever</h1>
    <div class="flex flex-col">
      <div class="flex flex-row">
        My ID: <strong>{{ $peer ? $peer.id : '' }}</strong>
      </div>
      <div class="flex flex-row">
        <strong>{{ message }}</strong>
      </div>
    </div>
    <div class="flex flex-col">
     <div class="flex flex-row"
      :key='signal'
      v-for='signal in SIGNALS'
      >
        <button
        :color='`${ signal === active ? "info" : "accent" }`'
        large
        >
          {{ signal }}
        </button>
     </div>
    </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			message: 'Waiting for connection ...',
		}
	},
	computed: {
		...mapState('signals', [
			'SIGNALS',
			'active',
		]),
	},
	mounted() {
		// * Watch for connections from other peers
		this.$peer.on('connection', (conn) => {
			this.message = 'Connected'
			// * Watch for data transmitions (s.e.d conn.send) from other peers
			conn.on('open', () => {
				conn.on('data', (data) => {
					// * `data` is the data sent from the peer
					this.$store.commit('signals/SET_ACTIVE', data)
				});
			});
		});
	},
}
</script>