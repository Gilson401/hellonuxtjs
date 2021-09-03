import { mount, RouterLinkStub } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'
import Card from '@/components/Card.vue'
const nasaItem = {
  nasaDataitem: {
    copyright: 'Robert Fedez',
    date: '2021-08-31',
    explanation: 'The Moon is normally seen',
    hdurl: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_1600.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Blue Moon in Exaggerated Colors',
    url: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_960.jpg'
  }
}

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo,
      {
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })
    expect(wrapper.vm).toBeTruthy()
  })
})
describe('Cards props().copyright', () => {
  it('renders a Card', () => {
    const wrapper = mount(Card, {
      propsData: {
        nasaDataitem: nasaItem
      }
    })
    expect(wrapper.props().nasaDataitem.copyright).toBe('Robert Fedez')
  })

  it('Checks date', () => {
    const wrapper = mount(Card, {
      propsData: nasaItem
    })
    expect(wrapper.props().nasaDataitem.date).toBe('2021-08-31')
  })
})
