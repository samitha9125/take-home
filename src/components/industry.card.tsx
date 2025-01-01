import React from "react";

import i18n from "@i18n/en.json";
import { CompanyItem } from "@src/constants/types";
import { titleCase } from "@src/utils";

import RowItem from "./row.card";

interface IndustryCardProps {
  title: string;
  total: number;
  items: CompanyItem[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({ total, items, title }) => {
  return (
    <div className="flex flex-col justify-start bg-card p-4 pb-6 rounded-md h-344 w-370">
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-base text-dark font-semibold">
          {titleCase(title)}
        </h1>
        <span className="text-base text-light pr-4 font-semibold">{total}</span>
      </div>
      <div className="flex justify-between border-b border-line pb-2 text-xs text-light">
        <span>{i18n.name}</span>
        <span>{i18n.totalJobs}</span>
      </div>
      <div className="mt-2 overflow-y-auto pr-4">
        {items.map((item, index) => (
          <RowItem
            key={`${item.uuid}-${index}`}
            iconUrl={item.iconUrl}
            name={item.name}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(IndustryCard);
