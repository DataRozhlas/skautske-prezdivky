function drawChart(vars) {
    console.log()
    Highcharts.chart('graf', {
        chart: {
            type: 'column',
            height: 150,
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Počet členů podle věku',
            style: {
                fontSize: 12
            }
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: [
                'pod 6 let',
                'pod 15 let',
                'pod 18 let',
                'pod 26 let',
                'nad 26 let'
            ],
            crosshair: true
        },
        yAxis: {
            visible: false,
            gridLineWidth: 0,
            min: 0,
            title: {
                text: 'členů',
                style: {
                    fontSize: 12,
                }
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: [{
            color: vars.fillColor,
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false,
            showInLegend: false,
            name: 'vek',
            data: vars.ageArr
        }]
    });
};

var map = L.map('map');
map.scrollWheelZoom.disable();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' 
    + 'data <a href="http://www.skaut.cz/">Skaut</a>'
}).addTo(map);

var cSize = d3.scaleLinear().domain([0, 742]).range([4, 25]);
var markers = L.markerClusterGroup();

zakladny.forEach(function(z) {
    markers.addLayer(L.circleMarker([z.y, z.x], {
            radius: cSize(z.celkem),
            color: '#bdbdbd',
            weight: 1,
            fillColor: (z.vodni == 'ano') ? 'rgba(49,130,189,0.8)' : 'rgba(222,45,38,0.8)',
            fillOpacity: 1,
            ageArr: [z.pod6, z.pod15, z.pod18, z.pod26, z.nad26],
            ttipCont: '<b>' + z.nazev + '</b>' 
                + ((z.vodni == 'ano') ? '<br><span style="color:rgba(49,130,189,0.8)">vodní Skauti</span>' : '')
                + '<br>členů: ' + z.celkem
    }))
});

map.addLayer(markers);
map.fitBounds(markers.getBounds());

markers.on('click', function(e) {
    $('#ttip').html(e.layer.options.ttipCont + '<div id="graf"></div>')
    drawChart(e.layer.options)        
});