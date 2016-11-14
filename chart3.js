var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container_genome'
    },

    title: {
        text: 'Cost per Whole Genome'
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
        name: '$/Genome',
        showInLegend:false,
        id: 'dataseries',
        data: [95263071.92,65811929.46,46954619.16,21919152.56,15919004.32,11562016.25,8632663.85,1377846.05,141461.88,34625.75,13978.79,6542.65,5535.99,4891.09,2697.22],
        type: 'spline',
        color: '#FF8D44',
        zoneAxis: 'x',
        zones: [{
            value: 6
        }, {
            color: '#2FFF31'
        }]
    }, {
        type: 'flags',
        data: [{
            x: 0, // 2001
            title: 'Draft HGP',
            text: 'Draft version of the human genome sequence published (as part of HGP)'
        }, {
            x: 1, // 2002
            title: 'Final HGP',
            text: 'Finished version of the human genome sequence completed (HGP concludes)'
        }, {
            x: 5, // 2006
            title: 'Polony',
            text: 'Introduction of polony sequencing by Church Lab'
        }, {
            x: 6, // 2007
            title: 'Shotgun/NGS',
            text: 'Solexa (now Illumina) commercializes \'shotgun sequencing\' technique, launching next-generation sequencing (NGS) era. The Sanger sequencing era ends.'
        }, {
            x: 7, // 2008
            title: 'SOLiD',
            text: 'Applied Biosystems introduces new technique of sequencing by oligonucleotide ligation and detection (SOLiD), also known as 2-based encoding.'
        }, {
            x: 14, // 2015
            title: 'Nanopore',
            text: 'Oxford Nanopore Technologies makes first nanopore sequencing technology commercially available.'
        }],
        onSeries: 'dataseries',
        shape: 'circlepin',
        width: 30,
        showInLegend: false
    }]

});
