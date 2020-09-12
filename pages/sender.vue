<template>
	<div>
		<h1>Sender</h1>

			<div class="flex flex-col">
				<div class="flex flex-row">
					<textarea
					label="Peer ID"
					style='max-width: 300px;'
					v-model='peerId'
					/>
					<button
					@click='joinPeer'
					color='primary'
					small
					>
						Connect
					</button>
				</div>
				<div class="flex flex-row">
					{{ message }}
				</div>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-row"
				:key='signal'
				v-for='signal in SIGNALS'
				>
					<button
					:color='`${ signal === active ? "info" : "accent" }`'
					@click='signalPeer(signal)'
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
        message: 'Waiting for input ...',
        peerId: null,
      }
    },
    computed: {
      ...mapState('signals', [
        'SIGNALS',
        'active',
      ]),
    },
    methods: {
      joinPeer() {
        debugger;
        if (this.peerId) {
          this.$peer.conn = this.$peer.connect(this.peerId.trim(), { reliable: true })
          this.$peer.conn.on('open', () => {
            this.message = `Connected to peer ${this.peerId}`
          })
        }
      },
      signalPeer(signal) {
        const { conn } = this.$peer
        if (conn && conn.open) {
          conn.send(signal)
          this.$store.commit('signals/SET_ACTIVE', signal)
        }
      },
    },
  }
</script>