//import JSON into Javascript
function drawCharts (ID) {
  filename = 'samples.json'
  d3.json(filename).then((importedData) => {
     var data = importedData.samples;
    //  var mdata = importedData.metadata;
     
     console.log(data);
    //  console.log(mdata);
     console.log(ID);
     
 var result = data.filter(sample => sample.id == ID)[0]
    //  Object.entries(data).forEach(function([key, value]) {
    //    console.log(key, value);
    //  });
    console.log(result);
     sampleVal = result.sample_values.slice(0, 10).reverse();
     console.log(sampleVal);
 
     otuIDs = result.otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();
     
     console.log(otuIDs);
 
 
     otuLabels = result.otu_labels.slice(0, 10).reverse(); 
     console.log(otuLabels);
 
   var trace1 = {
     x: sampleVal,
     y: otuIDs,
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
 
}
 






function init() {
  var dropdownMenu = d3.select("#selDataset");
  filename = 'samples.json'
 d3.json(filename).then((importedData) => {

    var names = importedData.names;
    names.forEach((sample)=> {
      dropdownMenu.append("option").text(sample).property("value", sample)
    })
    drawCharts(names[0])
  });
}

init();



function optionChanged(id) {

  
  drawCharts(id)
};

  