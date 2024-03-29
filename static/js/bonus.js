function buildGauge(sample){
  console.log("I am running")
  //gauge chart data
  d3.json(`/metadata/${sample}`).then(function(value) {
      console.log(value)

        // Enter a speed between 0 and 180
        var level = value.WFREQ;
        let degree = parseInt(level) * (180/9);

        // Trig to calc meter point
        var degrees = 180 - degree,
             radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);

        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
             pathX = String(x),
             space = ' ',
             pathY = String(y),
             pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);

        var data = [{ type: 'scatter',
           x: [0], y:[0],
            marker: {size: 28, color:'DB5F59'},
            showlegend: false,
            name: 'Washing Frequency',
            text: level,
            hoverinfo: 'text+name'},
          { values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
          rotation: 90,
          text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
          textinfo: 'text',
          textposition:'inside',
          marker: {colors: ['rgba(10, 84, 0, .5)', 'rgba(12, 97, 0, .5)', 'rgba(13, 113, 0, .5)', 'rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)', 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)', 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)', 'rgba(255, 255, 255, 0)', 'rgba(255,255,255,0)']},
          labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
          hoverinfo: 'label',
          hole: .5,
          type: 'pie',
          showlegend: false
        }];

        var layout = {
          shapes:[{
              type: 'path',
              path: path,
              fillcolor: 'DB5F59',
              line: {
                color: 'DB5F59'
              }
            }],
          title: sample + ' Belly Button Weekly Washing Frequency',
          xaxis: {zeroline:false, showticklabels:false,
                     showgrid: false, range: [-1, 1]},
          yaxis: {zeroline:false, showticklabels:false,
                     showgrid: false, range: [-1, 1]}
        };


        return Plotly.newPlot('gauge', data, layout);
    });
}


//----------------------------------------------
/* function gaugeChart(sample) {
    url = "/wfreq/";
    Plotly.d3.json(url + sample); 

    // Trig to calc meter point
    var degrees = 9 - level,
        radius = .5;
    var radians = degrees * Math.PI / 9;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
  
    // Path: may have to change to create a better triangle
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);
  
    var data = [{ type: 'scatter',
        x: [0], y:[0],
        marker: {size: 28, color:'850000'},
        showlegend: false,
        name: 'Washing Frequency',
        text: level,
        hoverinfo: 'text+name'},
        { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
        textinfo: 'text',
        textposition:'inside',
        marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                            'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                            'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                            'rgba(255, 255, 255, 0)']},
        labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
        hoverinfo: 'label',
        hole: .5,
        type: 'pie',
        showlegend: false
    }];
  
    var layout = {
        shapes:[{
        type: 'path',
        path: path,
        fillcolor: '850000',
        line: {
            color: '850000'
        }
      }],
        title: value + 'Belly Button Weekly Washing Frequency',
        height: 1000,
        width: 1000,
        xaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]},
        yaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]}
    };
  
    Plotly.newPlot('gauge', data, layout);
  
  } */