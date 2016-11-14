var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container_moores'
    },

    title: {
        text: 'Transistors per Integrated Circuit over Time'
    },

    xAxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
    },

    yAxis: {
        title: {
            text: false
        },
        type: 'logarithmic'
    },

    series: [{
        name: 'T/GPU',
        showInLegend:false,
        id: 'dataseries',
        data: [60000000,85000000,126000000,191000000,312000000,532500000,727000000,1179500000,2154000000,2946666667,4312710000,5310000000,6300000000,5200000000,8500000000],
        type: 'spline',
        color: '#DD1BFF',
        showInLegend: true
    }, {
        name: 'T/CPU',
        showInLegend:false,
        id: 'dataseries',
        data: [53640000,218749999.9,134166667,226333333,175888889,575666667,436500000,676363636,831000000,1611538462,1429000000,2547300000,2558571429,3295714286,3685000000],
        type: 'spline',
        color: '#25B7FF',
        showInLegend: true
    }, {
        type: 'flags',
        data: [{
            x: 1, // 2002
            title: '300mm',
            text: 'Intel transitions to 300-mm diameter silicon wafers, doubling chips processed on a single wafer while reducing production costs.'
        }, {
            x: 1, // 2002
            title: 'Germanium',
            text: 'Intel introduces a new kind of material, uniaxial strained silicon, which adds germanium to ICs to boost performance.'
        }, {
            x: 2, // 2003
            title: 'Automation',
            text: 'Intel opens a next-gen fab facility with highly automated semiconductor manufacturing.'
        }, {
            x: 3,
            title: 'Water', // 2004
            text: 'Nikon develops new optimal chipmaking system, using water to shrink transistor dimensions.'
        }, {
            x: 6, // 2007
            title: 'Mobile',
            text: 'Apple iPhone is released, ushering new era of mobile CPUs designed mainly by ARM Holdings, with focus on performance per watt, rather than raw performance.'
        }, {
            x: 6, // 2007
            title: 'High-K',
            text: 'Intel introduces new insulating transistor material named high-k/metal gate dialectric, boosting performance.'
        }, {
            x: 10, // 2011
            title: '3D Tri-Gate',
            text: 'Intel disclosues new vertical ("3D Tri-Gate") transistor structure, representing a historic departure from existing processes.'
        }, {
            x: 13,
            title: 'FinFETs', // 2014
            text: 'Intel, IBM, TSMC, and Samsung release commercially new FinFET transistor technology, based on vertical channel and control gate, doubling transistor count.'
        }],
        onSeries: 'dataseries',
        shape: 'circlepin',
        width: 30,
        showInLegend: false
    }]

    // legend: {
    //     layout: 'horizontal',
    //     align: 'center'
    // }

});
