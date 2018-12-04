import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'symbol', 'price', 'lastUpdated'];
  dataSource = new MatTableDataSource();

  constructor(private stockService: StockService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.stockService.getStocks().subscribe(data => {
      this.dataSource.data = data.stocks;
      this.dataSource.paginator = this.paginator
    })
  }

}