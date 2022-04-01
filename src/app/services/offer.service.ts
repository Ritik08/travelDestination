import { Injectable } from '@angular/core';
import { Offer, userRewards } from '../components/offers/offers.component';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  public offerList: Offer[] = [
    {
      id: 1,
      imgUrl: '/assets/Images/img1.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 2,
      imgUrl: '/assets/Images/img2.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 3,
      imgUrl: '/assets/Images/img1.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 4,
      imgUrl: '/assets/Images/img2.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 5,
      imgUrl: '/assets/Images/img1.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 6,
      imgUrl: '/assets/Images/img2.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 7,
      imgUrl: '/assets/Images/img1.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
    {
      id: 8,
      imgUrl: '/assets/Images/img2.jpeg',
      desc: 'Book your bus via ixigo & get upto ₹100 cashback,Book your bus via ixigo & get upto ₹100 cashback',
      discount: 50,
    },
  ];

  public rewards: userRewards[] = [
    {
      id: 1,
      logoUrl: '/assets/Images/logo1.png',
      desc: 'Total cashback earned',
      reward: '₹ 3999',
    },
    {
      id: 2,
      logoUrl: '/assets/Images/logo2.png',
      desc: 'Total Loyalty earned',
      reward: 'Pt .3999',
    },
  ];
  constructor() {}

  getAllOffers() {
    return this.offerList;
  }

  getOfferById(id: number) {
    return this.offerList.filter((offer) => offer.id == id)[0];
  }

  getRewards() {
    return this.rewards;
  }
}
