import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UploadService } from './../../../services/upload/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadService],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    .import-btn {
      border-radius: 10px;
      width: 45%;
      color: #464646;
      background-color: #ccc;
    }
    .success {
      color: green;
    }
    .failure {
      color: red;
    }
  `]
})
export class UploadComponent implements OnInit {
  @ViewChild('file') file;
  fileToUpload: File = null;
  popupMsg: string = "Uploading ...";
  uploadStatus: string = "In Progress";

  constructor(public uploadservice: UploadService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded(content) {
    this.fileToUpload = this.file.nativeElement.files.item(0);
    this.modalService.open(content, { size: 'lg', centered: true });
    this.uploadservice.upload(this.fileToUpload).subscribe(response => {
      this.popupMsg = response.data.message;
      this.uploadStatus = response.status;
    })
  }

}
