import hslaChanger from '.'

test(`init test`, ()=> {
  const color = `hsla(0, 0%, 0%, 1)`
  expect(hslaChanger(color, .8)).toBe(`hsla(0, 0%, 0%, 0.8)`)
  expect(hslaChanger(color, .3)).toBe(`hsla(0, 0%, 0%, 0.3)`)
})
