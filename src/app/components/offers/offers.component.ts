import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OfferService } from 'src/app/services/offer.service';

export interface Offer {
  id: number;
  imgUrl: string;
  desc: string;
  discount: number;
}

export interface userRewards {
  id: number;
  logoUrl: string;
  desc: string;
  reward: string;
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private modalService: BsModalService
  ) {}
  offerId: number = 0;
  public offerDetails: Offer = {
    id: 0,
    imgUrl: '',
    desc: '',
    discount: 0,
  };
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.offerId = params['id'];
    });
    this.offerDetails = this.offerService.getOfferById(this.offerId);
  }
  modalRef!: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
