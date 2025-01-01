import { PostsList, GroupedIndustry } from "@src/constants/types";

/**
 * Below function groups posts by their associated industries, pushing companies for each industry.
 * This function uses a Map for efficient lookups and insertions.
 *
 * @assumptions The API response is assumed to be valid and follow the same structure.
 */

const groupCompaniesByIndustry = (posts: PostsList): GroupedIndustry[] => {
  const industryMap = new Map<number, GroupedIndustry>();

  // Iterate over each post from the API.
  // For loop is used for performance gains.
  for (const post of posts) {
    const { industries, ...company } = post;

    // Since there can be multiple industries per company, iterate over each one.
    for (const { id, name } of industries) {
      // To reduce the map lookups.
      let industry = industryMap.get(id);
      if (!industry) {
        industry = {
          name,
          companies: [],
        };
        industryMap.set(id, industry);
      }

      // For this development, 32x32 is used as the icon size.
      industry.companies.push({
        iconUrl: company.images["32x32"],
        name: company.name,
        count: company.total_jobs_available,
        uuid: company.uuid,
      });
    }
  }

  const groups = Array.from(industryMap.values());
  for (let i = 0; i < groups.length; i++) {
    groups[i].companies.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  return groups;
};

// Self explanatory function: Use to convert a string to title case.
const titleCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export { groupCompaniesByIndustry, titleCase };
