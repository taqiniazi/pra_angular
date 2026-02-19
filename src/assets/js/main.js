// sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("mainContent");

toggleBtn.addEventListener("click", () => {
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop) {
    sidebar.classList.toggle("hide-desktop");
    mainContent.classList.toggle("full");
  } else {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("active");
  }
});

closeBtn.addEventListener("click", () => {
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop) {
    sidebar.classList.add("hide-desktop");
    mainContent.classList.add("full");
  } else {
    sidebar.classList.remove("show");
    overlay.classList.remove("active");
  }
});

// Overlay click (mobile only)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("active");
});

// document upload

const selectBtn = document.getElementById("select-picture");
const fileInput = document.getElementById("file-picture");
const fileName = document.getElementById("name-picture");

selectBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  fileName.textContent = fileInput.files.length
    ? fileInput.files[0].name
    : "Upload Picture here";
});

const linkColor = document.querySelectorAll(".sidebar-link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

// dataTables

// Graphs
Highcharts.chart("overviewChart", {
  chart: { type: "column", backgroundColor: "transparent" },
  title: { text: null },
   credits: {
        enabled: false
    },
  xAxis: {
    categories: [
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Gujranwala",
      "Sialkot",
      "Sargodha",
      "Bahawalpur",
      "D.G. Khan",
      "Sahiwal",
    ],
  },
  yAxis: { title: { text: "PKR Amount (M)" } },
  series: [
    {
      name: "Commissionerate",
      data: [480, 280, 390, 320, 150, 390, 320, 150, 200, 180],
      color: "#FFA000",
    },
  ],
  legend: {
    useHTML: true,
    labelFormatter: function () {
      return "<b>" + this.name + "</b>";
    },
    symbolWidth: 0, 
    symbolHeight: 0,
  },
});

Highcharts.chart("rangeChart", {
  chart: { type: "column", backgroundColor: "transparent" },
  title: { text: null },
   credits: {
        enabled: false
    },
  xAxis: { categories: ["Lahore", "Faisalabad", "Rawalpindi", "Multan","Sialkot"] },
  yAxis: { title: { text: "Amount (PKR)" } },
  plotOptions: { column: { stacking: "normal" } },
  series: [
    {
      name: "Commissionerate",
      data: [480, 280, 390, 320, 150],
      color: "#FFA000",
    },
    { name: "Green", data: [80, 70, 60, 75,50], color: "#22c55e", showInLegend: false },
    { name: "Orange", data: [120, 100, 90, 110, 130], color: "#f59e0b", showInLegend: false },
    { name: "Blue", data: [150, 180, 140, 160,150], color: "#1d4ed8", showInLegend: false },
  ],
   legend: {
    useHTML: true,
    labelFormatter: function () {
      return "<b>" + this.name + "</b>";
    },
    symbolWidth: 0, 
    symbolHeight: 0,
  },
  
});

Highcharts.chart("districtChart", {
  chart: { type: "column", backgroundColor: "transparent" },
  title: { text: null },
   credits: {
        enabled: false
    },
  xAxis: { categories: ["R1", "R2", "R3", "R4", "R5", "R6"] },
  yAxis: { title: { text: "PKR" } },
  series: [
    {
      name: "Range",
      data: [500, 320, 410, 210, 330, 380],
      color: "#FFA000",
    },
   
  ],
  legend: {
    useHTML: true,
    labelFormatter: function () {
      return "<b>" + this.name + "</b>";
    },
    symbolWidth: 0, 
    symbolHeight: 0,
  },
});

Highcharts.chart('registrationChart', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent'
  },
   title: { text: null },
  xAxis: {
    categories: [
      'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 
      'Gujranwala', 'Sialkot', 'Sargodha', 
      'Bahawalpur', 'D.G. Khan', 'Sahiwal'
    ],
   
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Count'
    }
  },
   credits: {
        enabled: false
    },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    shared: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'horizontal',
    itemStyle: {
      fontWeight: 'bold'
    }
  },
  series: [
    {
      name: 'Registered',
      data: [82, 72, 52, 89, 55, 68, 28, 50, 69, 90],
      color: '#22c55e'
    },
    {
      name: 'Un-Registered',
      data: [95, 50, 69, 56, 52, 56, 77, 33, 55, 55],
      color: '#f59e0b'
    }
    
  ],
  
  
});



Highcharts.chart('donutChart1', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent'
  },
   credits: {
        enabled: false
    },
  title: {
    text: 'Total<br><b>500</b>',
    align: 'center',
    verticalAlign: 'middle',
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    useHTML: true
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      innerSize: '60%',
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.point.y;
        },
        distance: 30
      },
      showInLegend: true
    }
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    layout: 'horizontal'
  },
  series: [{
    name: 'Count',
    data: [
      { name: 'Record Impound', y: 200, color: '#22c55e' },
      { name: 'No. of e-IMS Violation', y: 100, color: '#f59e0b' },
      { name: 'Violation Observed', y: 300, color: '#1d4ed8' }
    ]
  }]
});

Highcharts.chart('donutChart2', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent'
  },
   credits: {
        enabled: false
    },
  title: {
    text: 'Total<br><b>500</b>',
    align: 'center',
    verticalAlign: 'middle',
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    useHTML: true
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      innerSize: '60%',
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.point.y;
        },
        distance: 30
      },
      showInLegend: true
    }
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    layout: 'horizontal'
  },
  series: [{
    name: 'Count',
    data: [
      { name: 'e-IMS Penalties', y: 350, color: '#22c55e' },
      { name: 'Tax Assessment', y: 100, color: '#f59e0b' },
      { name: 'Penalty Imposed', y: 150, color: '#ef4444' }
    ]
  }]
});


Highcharts.chart('imsStatus', {
    chart: {
        type: 'line'
    },
     credits: {
        enabled: false
    },
   title: { text: null },
    xAxis: {
        categories: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'],
        title: {
            text: 'Commissionerate'
        }
    },
    yAxis: {
        title: {
            text: 'Percentage'
        },
        max: 100
    },
    tooltip: {
        valueSuffix: '%'
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom'
    },
    series: [
        {
            name: 'Active',
            data: [89, 40, 30, 60],
            color: '#1abc9c'
        },
        {
            name: 'Non-Active',
            data: [45, 55, 45, 55],
            color: '#e74c3c'
        },
        {
            name: 'Partial Active',
            data: [50, 30, 65, 35],
            color: '#3498db'
        }
    ]
});

Highcharts.chart('container', {
    colors: ['#FF0000', '#F59E0B', '#0B8C48'],
    chart: {
        type: 'column',
        inverted: true,
        polar: true
    },
     credits: {
        enabled: false
    },
   title: { text: null },
   
    tooltip: {
        outside: true
    },
    pane: {
        size: '85%',
        innerSize: '20%',
        endAngle: 270
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            align: 'right',
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        gridLineWidth: 0,
        categories: [
            'Norway <span class="f16"><span id="flag" class="flag no">' +
            '</span></span>',
            'United States <span class="f16"><span id="flag" class="flag us">' +
            '</span></span>',
            'Germany <span class="f16"><span id="flag" class="flag de">' +
            '</span></span>',
        ]
    },
    yAxis: {
        lineWidth: 0,
        tickInterval: 25,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true,
        gridLineWidth: 0
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15,
            borderRadius: {
                radius: '50%',
                where: 'all'
            }
        }
    },
    series: [{
        name: 'Violation Observed',
        data: [148, 113, 104, 71, 77]
    }, {
        name: 'Tax Assessment',
        data: [113, 122, 98, 88, 72]
    }, {
        name: 'Actual Amount Recovery',
        data: [124, 95, 65, 91, 76]
    }]
});

