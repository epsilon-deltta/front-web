function showPie(result) {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            // iris data from R
            columns: [
                ['a', result['a']],
                ['g', result['g']],
                ['c', result['c']],
                ['t', result['t']],
            ],
            type: 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });

}
function showDonut(result) {
    var chart0 = c3.generate({
        bindto: "#chart0",
        data: {
            columns: [
                ['a', result['a']],
                ['g', result['g']],
                ['c', result['c']],
                ['t', result['t']],
            ],
            type: 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Percentage"
        }
    });
}
function showGuage(result) {
    var chart1 = c3.generate({
        bindto: "#chart1",
        data: {
            columns: [
                ['performance', 91.4],

            ],
            type: 'gauge',

            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            //        label: {
            //            format: function(value, ratio) {
            //                return value;
            //            },
            //            show: false // to turn off the min/max labels.
            //        },
            //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            //    max: 100, // 100 is default
            //    units: ' %',
            //    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                //            unit: 'value', // percentage is default
                //            max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 180
        }
    });
}