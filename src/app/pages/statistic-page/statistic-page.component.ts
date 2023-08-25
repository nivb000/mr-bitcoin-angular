import { Component, OnInit, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  bitcoinService = inject(BitcoinService)
  rates: any[] = []

  view: [number, number] = [1300, 400] //width, height
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Currency';
  yAxisLabel = 'Value';

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#0F52BA", "#FF6F61","#E6E6FA","#FFB61E","#4B0082","#50C878","#E0115F","#FFDB58","#008080",
    "#CCCCFF","#F28500","#0047AB","#FF007F","#98FF98","#FFBF00","#40E0D0","#C8A2C8","#E4D00A","#007FFF","#C54B8C"
    ],
  };


  constructor() { }

  async ngOnInit(): Promise<void> {
    const rawData = await lastValueFrom(this.bitcoinService.getRate())
    this.rates = this.getRefactoredData(rawData)
  }

  getRefactoredData(data: any) {
    const refactoredValues = []
    const notIncludes = ['KRW', 'CLP', 'ARS', 'HUF', 'RUB', 'INR', 'ISK', 'JPY']
    for(const currency in data){
      if(data.hasOwnProperty(currency) && !notIncludes.includes(currency)){
        refactoredValues.push({
          name: currency,
          value: data[currency]["15m"]
        })
      }
    }
    return refactoredValues
  }

}
