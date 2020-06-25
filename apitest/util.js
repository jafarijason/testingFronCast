const { fetchData } = require('./http')

const loadData = () => {
    return fetchData().then(data => {
        const title = data.title
        return title
    })
}

const outputTitle = () => {
    loadData().then(title => {
        console.log(title);
    })
}


exports.loadData = loadData
exports.outputTitle = outputTitle