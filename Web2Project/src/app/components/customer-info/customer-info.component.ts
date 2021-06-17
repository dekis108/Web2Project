import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../create-incident/create-incident.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/model/devices';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomerLoaderService } from 'src/app/services/customerLoader/customer-loader.service';
import { Customer } from 'src/app/model/cusomter';



@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {

  customers !: Customer[];
  customerSource = new MatTableDataSource<Customer>(this.customers);
  displayedColumns: string[] = ['select', 'id', 'name','lastName','street','city','postcard','priority','phoneNumber','residental',];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private customerLoaderService: CustomerLoaderService,
    public dialogRef: MatDialogRef<CustomerInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  ngOnInit(): void {
    this.getCustomers();
    setTimeout(() => this.customerSource.paginator = this.paginator);
    setTimeout(() => this.customerSource.sort = this.sort);
  }

  getCustomers(): void {
    //this.customerLoaderService.getCustomers().subscribe(customers => this.customers = customers);
    this.customerSource = new MatTableDataSource<Customer>(this.customers);
  }


  selection = new SelectionModel<Customer>(false, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.customerSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.customerSource.data.forEach(row => this.selection.select(row));
  }

}