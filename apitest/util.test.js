const { loadData } = require('./util')

test('load data', () => {
    loadData().then(title => {
        expect(title).toBe('delectus aut autem')
    })
})