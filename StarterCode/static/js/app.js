



 filename = 'samples.json'
 d3.json(filename).then((importedData) => {
    var data = importedData.samples[0];
    var vdata = data.id
    console.log(data);
    console.log(vdata);
    

    Object.entries(data).forEach(function([key, value]) {
      console.log(key, value);
    });

    sampleVal = data.sample_values.slice(0, 10).reverse();
    console.log(sampleVal);

    otuIDs = data.otu_ids.slice(0, 10).reverse();
    console.log(otuIDs);

    otuLabels = data.otu_labels.slice(0, 10).reverse(); 
    console.log(otuLabels);


  // // Sort the data array using the greekSearchResults value
  //   data.sort(function(a, b) {
  //    return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  // });

  // // Slice the first 10 objects for plotting
  // data = data.slice(0, 10);

  // // Reverse the array due to Plotly's defaults
  // data = data.reverse();

  // Trace1 for the Greek Data
  var trace1 = {
    x: sampleVal,
    y: `OTU`+ otuIDs,
    text: otuLabels,
    // x: data.sample_values,
    // y: data.otu_ids,
    // text: data.otu_labels,
    name: "",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", chartData, layout);
});


//     console.log(data.samples)
//     console.log(data.samples[0])

//     var sortedBySV = data.samples[0].sample_values.slice(0, 10).reverse()
//     console.log(sortedBySV)
//     var sortedByIDs = data.samples[0].otu_ids.slice(0, 10).reverse()
//     console.log(sortedByIDs)
    
//     var sortedByLabels = data.samples[0].otu_labels.slice(0, 10).reverse()
//     console.log(sortedByLabels)
    
    
//     var sortedBySV = Object.values(sortedBySV);
//     var sortedByIDs = Object.values(sortedByIDs);
//     var sortedByLabels = Object.values(sortedByLabels);
//   });

// // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", optionChanged);




function optionChanged() {

  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  // Initialize x and y arrays
  var x = [];
  var y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);


};
//       // var plotdata = [{
//       //   type: 'bar',
//       //   x: sortedBySV,
//       //   y: sortedByIDs,
//       //   orientation: 'h'
//       // }];
      
//   //  // Call function to update the chart
//   //  updatePlotly(data);

//       // Plotly.newPlot("plot", plotdata);

// // });


// // init();
// // };
