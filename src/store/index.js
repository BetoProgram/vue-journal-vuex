import { createStore } from 'vuex'
import journalModule from '../modules/daybook/store/jornal'

const store = createStore({
    modules: {
        journalModule
    }
})

export default store