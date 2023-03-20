 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

test('math and objects still works', () => {
  expect(2).toBe(2)
  expect(testData.firstName).toBe('Patten')
})

describe('formatTitle test', () => {
  test('formatTitle should return a string', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(typeof formattedTitle).toBe('string')
    expect(typeof formatTitle('blah blah')).toBe('string')
  })

  test('formatTitle should make each word of the string have a capital letter at first char', () => {
    expect(formatTitle('blah blah blah')).toEqual('Blah Blah Blah')
  })
})

describe('shortenBio test(s)', () => {
  test('shortenBio has a ... at the end of the string', () => {
    expect(shortenBio(testData.bio).slice(-3)).toBe('...')
  })

  test('shortenBio should shorten longer bios with newlines', () => {
    expect(shortenBio(testData.bio).length).toBeLessThan(testData.bio.length)
  })
})

