var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container_hdd'
    },

    title: {
        text: 'Cost of Hard Disk Storage over Time'
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
        name: '$/GB',
        showInLegend:false,
        id: 'dataseries',
        data: [3.20,1.64,1.11,0.80,0.60,0.29,0.23,0.15,0.08,0.06,0.04,0.06,0.05,0.04,0.03],
        type: 'spline',
        color: '#E82C0C'
    }, {
        type: 'flags',
        data: [{
            x: 1, // 2002
            title: 'PMR Demo',
            text: 'Seagate demonstrates new Perpendicular Magnetic Recording (PMR) technology.'
        }, {
            x: 1, // 2002
            title: 'HAMR Demo',
            text: 'Seagate demonstrates new Heat-Assisted Magnetic Recording (HAMR) technology, using laser-thermal assistance.'
        }, {
            x: 5, // 2006
            title: 'PMR Release',
            text: 'Seagate manufactures first PMR-based drive for laptop form-factor.'
        }, {
            x: 9, // 2010
            title: 'Hybrid',
            text: 'Seagate introduces first solid state hybrid hard drive, boosting HDD speed to rival SSD.'
        }, {
            x: 10, // 2011
            title: 'Thailand Floods',
            text: 'Catastrophic flooding in Thailand, which makes a quarter of the world\'s hard drives, disrupts production creates global shortage leading to a 1-year price shock.'
        }, {
            x: 11,
            title: 'HAMR Release', // 2012
            text: 'Seagate reaches landmark 1TB/sq.in. milestone with HAMR-based demonstration drive.'
        }, {
            x: 11,
            title: 'Consolidation', // 2012
            text: 'Hard drive industry consolidates from 200 manufacturers over 5 decades to just three: Seagate, Western Digital, and Toshiba.'
        }, {
            x: 12,
            title: 'Helium', // 2013
            text: 'HGST introduces first helium-filled hard drives, boosting capacity and reliability.'
        }, {
            x: 13,
            title: 'SMR', // 2012
            text: 'Seagate announces new Shingled Magnetic Recording (SMR) technology, boosting capacity.'
        }],
        onSeries: 'dataseries',
        shape: 'circlepin',
        width: 30,
        showInLegend: false
    }]

});
