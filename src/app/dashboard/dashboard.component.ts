import { Component, AfterViewInit } from '@angular/core';
declare const Highcharts: any;

// Interface for statistics card data
interface StatsCard {
  label: string;
  icon: string;
  statsNo: string;
  class: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  registration_status: StatsCard[] = [
    {
      label: 'Registered',
      icon: './assets/images/icon1.png',
      statsNo:'132K',
      class:'bg-soft-green'
    },
    {
      label: 'Un-Registered',
      icon: './assets/images/icon2.png',
      statsNo:'12K',
      class:'bg-soft-red'
    }
  ]
  enforcement_voaliations: StatsCard[] = [
    {
      label: 'Record Impound',
      icon: './assets/images/icon3.png',
      statsNo:'1290',
      class:'bg-soft-blue'
    },
    {
      label: 'No. of e-IMS violation',
      icon: './assets/images/icon4.png',
      statsNo:'2312',
      class:'bg-soft-red'
    },
    {
      label: 'Violation Observed',
      icon: './assets/images/icon5.png',
      statsNo:'87K',
      class:'bg-soft-green'
    }
  ]
  assesment_recovery: StatsCard[] = [
    {
      label: 'e-IMS Penalties',
      icon: './assets/images/icon6.png',
      statsNo:'64,323',
      class:'bg-soft-red'
    },
    {
      label: 'Tax Assessment',
      icon: './assets/images/icon7.png',
      statsNo:'2848',
      class:'bg-soft-blue'
    },
    {
      label: 'Penalty Imposed',
      icon: './assets/images/icon8.png',
      statsNo:'7318',
      class:'bg-soft-pink'
    },
    {
      label: 'Default Surcharge',
      icon: './assets/images/icon9.png',
      statsNo:'245M',
      class:'bg-soft-red'
    },
    {
      label: 'Actual Amount Recovery',
      icon: './assets/images/icon10.png',
      statsNo:'980M',
      class:'bg-soft-green'
    }
  ]

  
  ngAfterViewInit(): void {
    this.initOverviewChart();
    this.initRangeChart();
    this.initDistrictChart();
    this.initRegistrationChart();
    this.initDonutChart1();
    this.initDonutChart2();
    this.initImsStatusChart();
    this.initPolarChart();
  }

  private initOverviewChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('overviewChart', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: [
          'Lahore',
          'Faisalabad',
          'Rawalpindi',
          'Multan',
          'Gujranwala',
          'Sialkot',
          'Sargodha',
          'Bahawalpur',
          'D.G. Khan',
          'Sahiwal'
        ]
      },
      yAxis: {
        title: {
          text: 'PKR Amount (M)'
        }
      },
      legend: {
        useHTML: true,
        labelFormatter: function (this: any): string {
          return '<b>' + this.name + '</b>';
        },
        symbolWidth: 0,
        symbolHeight: 0
      },
      series: [
        {
          name: 'Commissionerate',
          data: [480, 280, 390, 320, 150, 390, 320, 150, 200, 180],
          color: '#FFA000'
        }
      ]
    });
  }

  private initRangeChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('rangeChart', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Sialkot']
      },
      yAxis: {
        title: {
          text: 'Amount (PKR)'
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      legend: {
        useHTML: true,
        labelFormatter: function (this: any): string {
          return '<b>' + this.name + '</b>';
        },
        symbolWidth: 0,
        symbolHeight: 0
      },
      series: [
        {
          name: 'Commissionerate',
          data: [480, 280, 390, 320, 150],
          color: '#FFA000'
        },
        {
          name: 'Green',
          data: [80, 70, 60, 75, 50],
          color: '#22c55e',
          showInLegend: false
        },
        {
          name: 'Orange',
          data: [120, 100, 90, 110, 130],
          color: '#f59e0b',
          showInLegend: false
        },
        {
          name: 'Blue',
          data: [150, 180, 140, 160, 150],
          color: '#1d4ed8',
          showInLegend: false
        }
      ]
    });
  }

  private initDistrictChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('districtChart', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6']
      },
      yAxis: {
        title: {
          text: 'PKR'
        }
      },
      legend: {
        useHTML: true,
        labelFormatter: function (this: any): string {
          return '<b>' + this.name + '</b>';
        },
        symbolWidth: 0,
        symbolHeight: 0
      },
      series: [
        {
          name: 'Range',
          data: [500, 320, 410, 210, 330, 380],
          color: '#FFA000'
        }
      ]
    });
  }

  private initRegistrationChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('registrationChart', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      title: {
        text: null
      },
      xAxis: {
        categories: [
          'Lahore',
          'Faisalabad',
          'Rawalpindi',
          'Multan',
          'Gujranwala',
          'Sialkot',
          'Sargodha',
          'Bahawalpur',
          'D.G. Khan',
          'Sahiwal'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count'
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
      credits: {
        enabled: false
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        shared: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
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
      ]
    });
  }

  private initDonutChart1(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

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
            formatter: function (this: any): string {
              return String(this.point.y);
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
      series: [
        {
          name: 'Count',
          data: [
            { name: 'Record Impound', y: 200, color: '#22c55e' },
            { name: 'No. of e-IMS Violation', y: 100, color: '#f59e0b' },
            { name: 'Violation Observed', y: 300, color: '#1d4ed8' }
          ]
        }
      ]
    });
  }

  private initDonutChart2(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

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
            formatter: function (this: any): string {
              return String(this.point.y);
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
      series: [
        {
          name: 'Count',
          data: [
            { name: 'e-IMS Penalties', y: 350, color: '#22c55e' },
            { name: 'Tax Assessment', y: 100, color: '#f59e0b' },
            { name: 'Penalty Imposed', y: 150, color: '#ef4444' }
          ]
        }
      ]
    });
  }

  private initImsStatusChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('imsStatus', {
      chart: {
        type: 'line'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
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
  }

  private initPolarChart(): void {
    if (typeof Highcharts === 'undefined') {
      return;
    }

    Highcharts.chart('container', {
      colors: ['#FF0000', '#F59E0B', '#0B8C48'],
      chart: {
        type: 'column'
        // inverted: true,
        // polar: true
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
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
          'Norway <span class="f16"><span id="flag" class="flag no"></span></span>',
          'United States <span class="f16"><span id="flag" class="flag us"></span></span>',
          'Germany <span class="f16"><span id="flag" class="flag de"></span></span>'
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
      series: [
        {
          name: 'Violation Observed',
          data: [148, 113, 104, 71, 77]
        },
        {
          name: 'Tax Assessment',
          data: [113, 122, 98, 88, 72]
        },
        {
          name: 'Actual Amount Recovery',
          data: [124, 95, 65, 91, 76]
        }
      ]
    });
  }
}
