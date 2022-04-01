import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';
import { Offer, userRewards } from '../offers/offers.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private offerService: OfferService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  public offerList: Offer[] = [];

  public rewards: userRewards[] = [];
  ngOnInit(): void {
    this.offerList = this.offerService.getAllOffers();
    this.rewards = this.offerService.getRewards();
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { uid: 1 },
      queryParamsHandling: 'merge',
    });
  }
  handleClick(id: number) {
    this.router.navigate([`/offer/${id}`]);
  }
}
