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

describe('NuxtLogo Component', () => {
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

describe('Card Component', () => {
  it('copyright should be Robert Fedez', () => {
    const wrapper = mount(Card, {
      propsData: nasaItem
      
    })
    expect(wrapper.props().nasaDataitem.copyright).toBe('Robert Fedez')
  })

  it('Checks date props', () => {
    const wrapper = mount(Card, {
      propsData: nasaItem
    })
    expect(wrapper.props().nasaDataitem.date).toBe('2021-08-31')
  })
})

