//import JSON into Javascript
function drawCharts (ID) {
  filename = 'samples.json'
  d3.json(filename).then((importedData) => {
     var data = importedData.samples;
    
     
     console.log(data);
    
     console.log(ID);
     
 var result = data.filter(sample => sample.id == ID)[0]

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

     name: "",
     type: "bar",
     orientation: "h"
   };
 
   // data
   var chartData = [trace1];
 
   // Apply the group bar mode to the layout
   var layout = {
     title: "",
    //  margin: {
    //    l: 100,
    //    r: 100,
    //    t: 100,
    //    b: 100
    //  }
   };
 
   // Render the plot to the div tag with id "plot"
   Plotly.newPlot("bar", chartData, layout);

  //  //fill text box

    var mdata = importedData.metadata;
       Object.entries(mdata).forEach(function([key, value]) {
       console.log(key, value);

       d3.select("sample-metadata").append(value[key])
     });


// Create a bubble plot using plotly
     var trace2 = {
      x: result.otu_ids,
      y: result.sample_values,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: result.sample_values,
        color: result.otu_ids
        
      }
    };
    
    var chartData2 = [trace2];
    
    var layout2 = {
      title: 'Marker Size',
      showlegend: false,
      
      // height: 600,
      // width: 600
    };
    
    Plotly.newPlot('bubble', chartData2, layout2);
  

    
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

  