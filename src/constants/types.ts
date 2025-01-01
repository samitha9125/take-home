export interface CompanyItem {
  iconUrl: string;
  name: string;
  count: number;
  uuid: string;
}

export interface GroupedIndustry {
  name: string;
  companies: CompanyItem[];
}

export type PostsList = PostItem[];

export type PostItem = {
  uuid: string;
  images: {
    [size: string]: string;
  };
  industries: {
    id: number;
    name: string;
  }[];
  name: string;
  total_jobs_available: number;
};
