import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevicePost } from 'src/app/model/devices';
import { DevicePostService } from 'src/app/services/device-post/device-post.service';


@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  constructor(public devicePostService : DevicePostService) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    coordinates: new FormControl(''),
    priority: new FormControl(0),
    type: new FormControl('', Validators.required),
  });

  devicePost !: DevicePost;
  onSubmit() {
    if (this.profileForm.value['type'] == '') {
      alert("Must select a type");
      return;
    }

    this.devicePost = {
      name: this.profileForm.value['name'] != '' ? this.profileForm.value['name'] : "empty",
      address: this.profileForm.value['address'] != '' ? this.profileForm.value['address'] : "empty",
      coordinates: this.profileForm.value['coordinates'] != '' ? this.profileForm.value['coordinates'] : "empty",
      priority: this.profileForm.value['priority'] != '' ? this.profileForm.value['priority'] : "0",
      type: this.profileForm.value['type']
    };

    this.devicePostService.postDevice(this.devicePost).subscribe(
      (res: any) => {
        console.log("Uploadovan device");
      },
      err => {
        console.log("Err: " + err.toString());
      }
    );
  }


  DeviceType = [
    "Switch",
    "Breaker",
    "Transformator",
    "Disconnector",
  ]
  
}

