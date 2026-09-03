export interface FundMember {
  id: string;
  name: string;
  paid: number;
}

export interface GroupFund {
  groupName: string;
  destination: string;
  travelDate: string;
  totalPerPerson: number;
  members: FundMember[];
}
