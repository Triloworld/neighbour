<template>
	<div class="relative flex flex-row flex-auto">
		<div class="flex-initial flex flex-row p-4">
			USER: <strong class="pl-2">{{ $store.$peer ? $store.$peer.id : '~ ERROR ~' }}</strong>
		</div>
		<div class="flex-auto flex flex-row p-4 justify-center">
			<strong>{{ state }}</strong>
		</div>
    <div class="flex-initial flex flex-row p-4"
      :key='signal'
      v-for='signal in SIGNALS'
		>
			<button
			:color='`${ signal === active ? "info" : "accent" }`'
			>
				{{ signal }}
			</button>
    </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: "ChatReceiver",
	data() {
		return {
			state: 'Waiting for connection ...',
		}
	},
	computed: {
		...mapState('signals', [
			'SIGNALS',
			'active',
		]),
	},
	created() {
		// debugger;
	},
	mounted() {
		// debugger
		const dataConnection = this.$store.$peer.connect(this.$store.$peer.id);
		// * Watch for connections from other peers
		this.$store.$peer.on('connection', (conn) => {
			this.state = 'Connected'
			// * Watch for data transmitions (s.e.d conn.send) from other peers
			conn.on('open', () => {
				conn.on('data', (data) => {
					// * `data` is the data sent from the peer
					console.log(data);
					this.$store.commit('signals/SET_ACTIVE', data)
				});
			});
		});
	}
}
</script>