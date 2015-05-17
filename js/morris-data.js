$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-02-07',
            dotfiles: 1585,
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2015-02-14',
            dotfiles: 1584,
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2015-02-21',
            dotfiles: 1587,
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2015-02-28',
            dotfiles: 1590,
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2015-03-07',
            dotfiles: 1569,
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2015-03-14',
            dotfiles: 1506,
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2015-03-21',
            dotfiles: 1524,
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2015-03-28',
            dotfiles: 1524,
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2015-04-04',
            dotfiles: 1532,
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2015-04-11',
            dotfiles: 1543,
            ipad: 5713,
            itouch: 1791
        }, {
            period: '2015-04-18',
            dotfiles: 956,
            ipad: 5713,
            itouch: 1791
        }, {
            period: '2015-04-25',
            dotfiles: 1005,
            ipad: 5713,
            itouch: 1791
        }, {
            period: '2015-05-02',
            dotfiles: 1005,
            ipad: 5713,
            itouch: 1791
        }, {
            period: '2015-05-09',
            dotfiles: 1005,
            ipad: 5713,
            itouch: 1791
        }, {
            period: '2015-05-16',
            dotfiles: 1012,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['dotfiles', 'new.theonlystephen.com', 'django-recurrence', 'exercises', 'nestoria-python', 'swmcc.github.io', 'api.whatisonte.tv', 'sample-files', 'xmltvparser', 'quantum', 'recipies'],
        labels: ['dotfiles', 'new.theonlystephen.com', 'django-recurrence', 'exercises', 'nestoria-python', 'swmcc.github.io', 'api.whatisonte.tv', 'sample-files', 'xmltvparser', 'quantum', 'recipies'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Open",
            value: 29 
        }, {
            label: "Closed",
            value: 54 
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
