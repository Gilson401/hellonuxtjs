/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import testdispatch from '@/pages/testdispatch'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Card Component', () => {
    let store
    let actions
    let getters
    let wrapper
    beforeEach(() => {
        actions = {
            'example/changeStoreValue': jest.fn()
        }

        getters = {

            'example/getItemValue': () => {
                return 'ABEV3'
            }
        }

        store = new Vuex.Store({
            namespaced: true,
            state: {},
            getters,
            actions
        })
        wrapper = shallowMount(testdispatch, { localVue, store })
    })
    it('deve disparar o evento ', () => {
        expect(actions['example/changeStoreValue']).toHaveBeenCalled()
    })

    it.only('deve disparar o evento ', () => {
        console.log(wrapper.html())
        expect(wrapper.vm.currentAsset).toBe('ABEV3')
    })
})
