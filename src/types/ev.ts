export interface EVStation {
  id: string;
  name: string;
  location: string;
  status: 'available' | 'in-use';
  powerOutput: number;
  connectorType: string;
  pricePerKwh: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface EVFilters {
  connectorType: string;
  minPower: number;
  status: 'all' | 'available';
}