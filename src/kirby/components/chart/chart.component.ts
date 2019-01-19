import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, Inject } from '@angular/core';
import { Options } from 'highcharts';
import { ChartHelper } from './chart-helper';
import { DonutOptions, DONUT_OPTIONS } from './options/donut';
import { ChartType } from './chart-type';

@Component({
  selector: 'kirby-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [
    ChartHelper,
    { provide: DONUT_OPTIONS, useValue: DonutOptions }
  ]
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data = [];
  @Input() height = 300;
  @Input() type: ChartType = ChartType.PIE;
  @Input() description = '';
  @Input() showDataLabels = true;
  @ViewChild('chartContainer') chartContainer: ElementRef;

  options: Options = {};

  constructor(private chartHelper: ChartHelper, @Inject(DONUT_OPTIONS) public donutOptions: Options) {
  }

  ngOnInit() {
    this.setupChartType();
    this.updateProperties();
    this.chartHelper.init(this.options, this.chartContainer);
  }

  ngOnChanges() {
    this.updateProperties();
    this.chartHelper.updateChart(this.options);
  }

  setupChartType() {
    let pieInnerCircleSize = '0%';
    if (this.type === ChartType.DONUT) {
      this.type = ChartType.PIE;
      pieInnerCircleSize = '50%';
    }
    if (this.type === ChartType.PIE) {
      this.options = this.donutOptions;
      this.options.plotOptions.pie.innerSize = pieInnerCircleSize;
    }
    this.options.chart.type = this.type;
  }

  updateProperties() {
    if (this.options.chart && this.options.chart.type === ChartType.PIE) {
      this.options.chart.height = this.height;
      this.options.series[0].data = this.data;
      this.options.chart.description = this.description;
      this.options.plotOptions.pie.dataLabels.enabled = this.showDataLabels;
    }
  }

}