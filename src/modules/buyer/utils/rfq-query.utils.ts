import { RfqFilterStateType } from "../types/rfq-list.type";

type BuildRfqQueryParamsArgs = {
  userId?: string;
  filter: RfqFilterStateType;
  searchTerm: string;
  sortBy: string;
  page: number;
  limit: number;
};

export function buildRfqQueryParams({
  userId,
  filter,
  searchTerm,
  sortBy,
  page,
  limit,
}: BuildRfqQueryParamsArgs): Record<string, string | number> {
  const params: Record<string, string | number> = {
    page,
    limit,
  };

  if (userId) params.createdBy = userId;
  if (searchTerm) params.search = searchTerm;
  if (sortBy) params.sort = sortBy;

  if (filter.status) params.status = filter.status;
  if (filter.product_category)
    params.product_category = filter.product_category;
  if (filter.gender) params.gender = filter.gender;
  if (filter.material_febric) params.material_febric = filter.material_febric;
  if (filter.sample_requirement)
    params.sample_requirement = filter.sample_requirement;
  if (filter.printing_embroidery) {
    params.printing_embroidery = filter.printing_embroidery;
  }
  if (filter.packaging_requirement) {
    params.packaging_requirement = filter.packaging_requirement;
  }
  if (filter.deliveryCountry) params.deliveryCountry = filter.deliveryCountry;
  if (filter.Incoterms) params.Incoterms = filter.Incoterms;
  if (filter.payment_terms) params.payment_terms = filter.payment_terms;

  // Send as comma-separated codes — avoids array parsing issues and # encoding bugs
  if (filter.required_colors.length > 0) {
    params.color_codes = filter.required_colors.join(",");
  }

  if (filter.product_sizes.length > 0) {
    params.product_sizes = filter.product_sizes.join(",");
  }

  return params;
}
