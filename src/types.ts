/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  priceDetails: string;
  features: string[];
  imageUrl: string;
}

export interface BookingData {
  customerName: string;
  phoneNumber: string;
  whatsappNumber: string;
  serviceType: string;
  selectedDate: string;
  selectedSlot: string;
  bookingAddress: string;
  locality: string;
  notes?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  serviceReceived: string;
  date: string;
}
