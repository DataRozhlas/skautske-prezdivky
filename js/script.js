var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

var pocetClenu = [
  [1991,82537],
  [1992,79337],
  [1993,72088],
  [1994,69313],
  [1995,64484],
  [1996,63464],
  [1997,60087],
  [1998,56979],
  [1999,54989],
  [2000,54543],
  [2001,53028],
  [2002,51264],
  [2003,49851],
  [2004,47863],
  [2005,41967],
  [2006,40583],
  [2007,41844],
  [2008,42349],
  [2009,44638],
  [2010,45252],
  [2011,45586],
  [2012,46687],
  [2013,48093],
  [2014,50438],
  [2015,53028],
  [2016,55533],
  [2017,57840],
  [2018,60522]
];

var prezdivky = [
  ["Veverka",110],
  ["Smíšek",84],
  ["Beruška",79],
  ["Myška",75],
  ["Klíště",72],
  ["Krtek",71],
  ["Bobr",69],
  ["Mája",68],
  ["Pája",64],
  ["Medvěd",63],
  ["Ježek",63],
  ["Míša",61],
  ["Kiki",57],
  ["Liška",57],
  ["Tom",56],
  ["Panda",56],
  ["Kecka",54],
  ["Ještěrka",51],
  ["Žabka",50],
  ["Cvrček",50]
]

var xdata = prezdivky.map(function(d) {
        return d[0]
    })

var maugli = [
  ["Akéla",27],
  ["Balů",25],
  ["Mauglí",22],
  ["Ká",4],
  ["Baghíra",2],
  ["Šerchán",2],
  ["Háthí",1]
]

var sipy = [
  ["Bublina",32],
  ["Rychlonožka",14],
  ["Bidlo",13],
  ["Červenáček",11],
  ["Bohouš",10],
  ["Rikitan",5],
  ["Metelka",2],
  ["Losna",2],
  ["Široko",1],
  ["Mirek Dušín",1],
]

var us = [
  ["Jerry",39],
  ["Johny",38],
  ["Andy",31],
  ["Harry",19],
  ["Dave",18],
  ["Mary",15],
  ["Sid",13],
  ["George",13],
  ["Kitty",12],
  ["Jack",12]
]

var tolkien = [
  ["Smíšek",84],
  ["Hobit",17],
  ["Glum",13],
  ["Frodo",12],
  ["Gandalf",9],
  ["Pipin",5],
  ["Bilbo",4],
  ["Legolas",3],
  ["Thorin",2],
  ["Gimli",2]
]

var xmaugli = maugli.map(function(d) {
        return d[0]
    })

var xsipy = sipy.map(function(d) {
        return d[0]
    })

var xus = us.map(function(d) {
        return d[0]
    })

var xtolkien = tolkien.map(function(d) {
        return d[0]
    })

var ptaci = [
  ["Orel",34],
  ["Kuře",34],
  ["Sova",32],
  ["Sojka",29],
  ["Sokol",24],
  ["Papoušek",21],
  ["Datel",20],
  ["Racek",18],
  ["Kukačka",16],
  ["Poštolka",15]
]

var rodina = [
  ["Děda",11],
  ["Teta",9],
  ["Brácha",9],
  ["Strejda",7],
  ["Taťka",7],
  ["Dědek",7],
  ["Mamča",7],
  ["Babča",6],
  ["Omyl",3],
  ["Synek",2]
]

var pecivo = [
  ["Piškot",45],
  ["Rohlík",8],
  ["Houska",8],
  ["Preclík",6],
  ["Koblih",5],
  ["Bageta",4],
  ["Štrůdl",3],
  ["Chleba",2],
  ["Loupák",1],
  ["Kaiserka",1]
]

var interpunkce = [
  ["Tečka",13],
  ["Otazník",11],
  ["Čárka",3],
  ["Vykřičník",2]
]

var xptaci = ptaci.map(function(d) {
        return d[0]
    })

var xrodina = rodina.map(function(d) {
        return d[0]
    })

var xpecivo = pecivo.map(function(d) {
        return d[0]
    })

var xinterpunkce = interpunkce.map(function(d) {
        return d[0]
    })

var benjaminci = [
  ['rok 2009', 0],
  ['rok 2018', 4688]
]

var vlcata = [
  ['rok 2009', 15737],
  ['rok 2018', 21451]
]

var skauti = [
  ['rok 2009', 9067],
  ['rok 2018', 13065]
]

var roveri = [
  ['rok 2009', 7604],
  ['rok 2018', 9195]
]

var dospeli = [
  ['rok 2009', 5164],
  ['rok 2018', 5546]
]

var ostatni = [
  ['rok 2009', 7066],
  ['rok 2018', 6577]
]

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

Highcharts.chart('clenove', {

    chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },

    title: {
        text: 'Junák, počet členů'
    },

    subtitle: {
        text: ''
    },

    annotations: [{
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1997,
                y: 52000
            },
            text: 'Generační obměna v 90. letech'
        }]
    }, {
        labelOptions: {
            shape: 'connector',
            align: 'left',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1991,
                y: 87000
            },
            text: '1989: Znovuzaložení Junáka'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1992,
                y: 79337
            },
            text: 'Návrat do mezinárodních organizací'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1995,
                y: 64484
            },
            text: 'Světové jamboree<br>Nizozemsko'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2005,
                y: 41967
            },
            text: 'Přijata Charta<br>českého skautingu'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2007,
                y: 41844
            },
            x: 60,
            y: 35,
            text: 'Světové jamboree<br>Velká Británie'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2011,
                y: 45586
            },
            x: 0,
            y: -35,
            text: 'Světové jamboree<br>Švédsko'
        }]
    }],

    xAxis: {
        labels: {
            format: '{value}'
        },
        minRange: 5,
        title: {
            text: ''
        }
    },

    yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
            text: null
        },
        labels: {
            format: '{value}'
        },
        title: {
            text: 'počet členů'
        }
    },

    tooltip: {
        headerFormat: '<b>{point.y}</b> členů<br>',
        pointFormat: '(rok {point.x})',
        shared: true
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://www.skaut.cz/',
        text : 'Zdroj: Junák'
    },

    series: [{
        data: pocetClenu,
        lineColor: 'black',
        color: '#294885',
        fillOpacity: 0.5,
        name: '',
        marker: {
            enabled: false
        },
        threshold: null
    }]

});

Highcharts.chart('prezdivky', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Junák, nejčastější přezdívky'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: xdata
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: prezdivky,
        color: colors[0]
    }]

});

Highcharts.chart('maugli', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Kniha džunglí'
    },

    xAxis: {
        categories: xmaugli
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: maugli,
        color: colors[1]
    }]
});

Highcharts.chart('sipy', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Rychlé šípy'
    },

    xAxis: {
        categories: xsipy
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: sipy,
        color: colors[2]
    }]
});

Highcharts.chart('us', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Anglická jména'
    },

    xAxis: {
        categories: xus
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: us,
        color: colors[3]
    }]
});

Highcharts.chart('tolkien', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Tolkien'
    },

    xAxis: {
        categories: xtolkien
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: tolkien,
        color: colors[4]
    }]
});

Highcharts.chart('ptaci', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Ptáci'
    },

    xAxis: {
        categories: xptaci
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: ptaci,
        color: colors[5]
    }]
});

Highcharts.chart('rodina', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Rodina'
    },

    xAxis: {
        categories: xrodina
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: rodina,
        color: colors[6]
    }]
});

Highcharts.chart('pecivo', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Pečivo'
    },

    xAxis: {
        categories: xpecivo
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: pecivo,
        color: colors[7]
    }]
});

Highcharts.chart('interpunkce', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Interpunkce'
    },

    xAxis: {
        categories: xinterpunkce
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y}×</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'přezdívky',
        data: interpunkce,
        color: colors[0]
    }]
});

Highcharts.chart('slozeni', {

    chart: {
        type: 'line'
    },

    title: {
        text: 'Junák, členové podle věku'
    },

    subtitle: {
        text: 'nejmladších přibývá nejrychleji'
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2009', 'rok 2018']
    },

    yAxis: {
        title: {
            text: 'Počet členů'
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'benjamínci (5-7 let)',
        data: benjaminci,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'vlčata/světlušky (7-11 let)',
        data: vlcata,
        marker: {
            symbol: 'circle'
        },
        color: colors[1]
    }, {
        name: 'skauti/skautky (10-15 let)',
        data: skauti,
        marker: {
            symbol: 'circle'
        },
        color: colors[2]
    }, {
        name: 'roveři/rangers (15-26 let)',
        data: roveri,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }, {
        name: 'dospělí',
        data: dospeli,
        marker: {
            symbol: 'circle'
        },
        color: colors[5]
    }, {
        name: 'ostatní',
        data: ostatni,
        marker: {
            symbol: 'circle'
        },
        color: colors[6]
    }]
});

});
