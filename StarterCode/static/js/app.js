
filename = 'samples.json'
d3.json(filename).then(function(data) {
    // prettify json
    console.log(data)
    console.log(data.samples)

    var sortedByID = data.samples[0].otu_ids.slice(0, 10).reverse()
    console.log(sortedByID)

    // var top10IDs

    // // get data from OTU's
    // var top10Ids = data.samples[0].otu_ids.slice(0,10).reverse()
    // var top10Values = data.samples[0].sample_values.slice(0,10).reverse()
    // var top10labels = data.samples[0].otu_labels.slice(0,10).reverse()

    // // populate dropdown
    // data.names.forEach(function(name) {
    //     d3.select("#selDataset").append("option").text(name).property("value");
    // });
});

// 