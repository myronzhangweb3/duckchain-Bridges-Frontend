import { defineStore } from 'pinia'
import { THEME, TonConnectUI } from '@tonconnect/ui'
import { notifyError } from '@/libs/utils'

export const useTonWalletStore = defineStore('ton-wallet', {
  state: () => ({
    account: '',
    wallet: null
  }),
  actions: {
    async init() {
        try {
            let tonConnect = markRaw(new TonConnectUI({
                manifestUrl: 'https://bridge.ton.org/tonconnect-manifest.json',
                buttonRootId: 'ton-connector'
            }));

            tonConnect.uiOptions = {
                uiPreferences: {
                    theme: THEME.DARK
                }
            }

            this.wallet = tonConnect
            this.wallet.onStatusChange((wallet) => {
                try {
                    notifyError(wallet.account.toString())
                    this.account = wallet.account.address || ''
                } catch(e) {
                    notifyError(e?.toString())
                }
            })
        } catch(e) {
            console.log(e)
        }
    },
    async connectWallet() {
        try {
            this.wallet.openModal()
        } catch(e) {}
    },
    disconnectWallet() {
        try {
            this.account = ''
            this.wallet.disconnect()
        } catch {}
    }
  }
})
