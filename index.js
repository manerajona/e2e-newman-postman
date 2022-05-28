require('newman').run({
    environment: './watson-env.json',
    collection: './watson-col.json',
    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: 'reports/report.html',
            title: 'Watson regression',
            browserTitle: 'regression',
            desplayProgressBar: true
        }
    }
}, err => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})
