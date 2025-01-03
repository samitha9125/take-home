import { useEffect, useState } from "react";

import API from "@src/services/api.service";
import { APIMethods } from "@src/constants/enums";
import { groupCompaniesByIndustry } from "@src/utils";
import { GroupedIndustry, PostsList } from "@src/constants/types";
import IndustryCard from "@src/components/industry.card";
import { Endpoints } from "@src/constants/endpoints";

const IndustriesList = () => {
  const [data, setData] = useState<GroupedIndustry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API<PostsList>(APIMethods.GET, Endpoints.items);
        const groupedByIndustry = groupCompaniesByIndustry(response);
        setData(groupedByIndustry);
      } catch (error) {
        // Did not handle the error since it was not a requirement.
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center items-center py-10">
      {Object.entries(data).map(([id, industry]) => (
        <IndustryCard
          key={id}
          title={industry.name}
          total={industry.companies.length}
          items={industry.companies}
        />
      ))}
    </div>
  );
};

export default IndustriesList;
