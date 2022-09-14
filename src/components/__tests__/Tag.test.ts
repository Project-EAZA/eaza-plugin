import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Tag from '../Tag.vue'

describe('Tag Component', () => {
  it('should render', () => {
    const wrapper = mount(Tag)

    expect(wrapper.html()).toBeTruthy()
  })
})
