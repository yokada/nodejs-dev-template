import {expect, assert} from 'chai'

describe('example serinario', () => {
  it('example case', () => {
    expect(1+2).eq(3)
  })
  it('example case 2', () => {
    // This CONFIG object supplied from webpack config.
    // See webpack config's plugins block.
    expect(CONFIG.app.name).eq('This is my app.')
  })
})
