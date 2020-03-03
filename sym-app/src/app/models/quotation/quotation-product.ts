import { BaseDO } from '../common/basedo';

export class QuotationProduct extends BaseDO {
  quotationProductSeq: number;
  productSeq: number;
  productId: string;
  productVersion: number;
  productTypeCd: string;
  productFamilyCd: string;
  baseSumAssured: number;
  baseAnnualPremium: number;
  modalPremium: number;
  productTerm: number;
  premiumPayingTerm: number;
  paymentTypeCd: string;
  paymentFrequencyCd: string;
  productPlanOptionCd: string;
  premiumSAFl: string;
  emr: number;
  flatExtra: number;
  planCode: string;
  selected: string;
  flatLoading: number;
  flatLoadingDuration: number;
  multipleLoading: number;
  multipleLoadingDuration: number;
  premiumDiscount: number;
  premiumDiscountDuration: number;
  currencyCd: string;
  ropIndicatorCd: string;
  ropInterestRate: number;
  dividendOptionCd: string;
  enhancedProtectionOptionTDBTarget: number;
  floorWithGuaranteedCashValueCd: string;
  capWithBasicPlanFACd: string;
  cashDropReinvest: string;
  terminalBonusReinvest: string;
  dividendOption: string;
  endowmentOption: string;
  pdfOption: string;
  pdfAmount: number;
  oe: number;
  // #versionId: number
  // #guid: string

  // #newly added attributes
  multiplier: number;
  annuityAge: number;
  annuityPerc: number;
  annuityOptionCd: string;
  veryLowReturnRate: number;
  lowReturnRate: number;
  mediumReturnRate: number;
  highReturnRate: number;
  veryHighReturnRate: number;
  partyRoleCd: string;
  portfolioModelCd: string;
  emrDuration: number;
  occuExtra: number;
  occuExtraDuration: number;
  nsapExtra: number;
  nsapExtraDuration: number;
  healthExtra: number;
  healthExtraDuration: number;
  monthlyIncome: number;
  annualIncome: number;
  flatExtraDuration: number;
  capturedPremiumAmt: number;
  insuredPartyRefGuid: string;
  combinedEntryAge: number;
  // #discountPerc: number
  // #discountDuration: number
  ropPerc: number;
  addtnField1: string;
  addtnField2: string;
  addtnField3: string;
  addtnField4: string;
  addtnField5: string;
  addtnField6: string;
  annualizedPremium: number;
  totAnnualizedPremium: number;
  educationCess: number;
  serviceTax: number;
  extraPremium: number;
  totDiscount: number;
  wopPremium: number;
  maxTargetPremium: number;
  minTargetPremium: number;
  recommendedPremium: number;
  unapliedPremium: number;
  emrExtraPremium: number;
  flatExtraPremium: number;
  nsapExtraPremium: number;
  occExtraPremium: number;
  healthExtraPremium: number;
  riderRegularPayProduct: string;
  coi: number;

  // #premiumHolidayFl  : string
  // #premiumHolidayYear: number
  // #premiumOffsetFl: string
  // #premiumOffsetOptionCd: string
  // #premiumOffsetYear: number
  // #premiumOffsetValues: string

  // #pdfRequiredFl: string
  // #pdfFrequencyVal: number
  // #pdfPeriod: number
  // #solverTypeCd: string
  // #targetFundFl: string
  // #payingYears: number
  // #retirementOptionFl: string
  // #retirementPercent: number
  linkedFl: string;
  parentproductSeq: number;

  // # not synced
  illustrationRate: number;
  premiumSplit: number;
  premiumGuarantees: number;
  computedmodalPremium: number;

  // # online attributes
  productSetSeq: string;
  paidUpValue: number;
  productTermUnitCd: string;
  premiumPayingTermUnitCd: string;
  vestingAge: number;
  singleLifeAllowed: string;
  riderType: string;
  saIndexationCd: string;
  premiumIndexationCd: string;
  fixedPrmIndexationVal: number;
  fixedSAIndexationVal: number;
  payoutFrequencyCd: string;
  systTransferOptionCd: string;
  pdfRequiredFl: string;
  tpdLoadingValue: number;
  ciLoadingValue: number;
  lifeLoadingValue: number;
  ciLoadingTerm: number;
  tpdLoadingTerm: number;
  lifeLoadingTerm: number;
  premiumHolidayFl: string;
  premiumHolidayYear: number;
  premiumOffsetFl: string;
  premiumOffsetOptionCd: string;
  premiumOffsetYear: number;
  premiumOffsetValues: string;
  topUpAllocSameAsPremAllocFl: string;
  pdfFrequencyVal: number;
  pdfPeriod: number;
  solverTypeCd: string;
  targetFundFl: string;
  payingYears: number;
  targetFundVal: number;
  targetPeriodRefCd: string;
  targetPeriod: number;
  retirementOptionFl: string;
  retirementPercent: number;
  compAnnualPremium: number;
  compHalfYlyPremium: number;
  compQtlyPremium: number;
  compMonthlyPremium: number;
  builtInRiderFl: string;
  sortOrder: number;
  paidUpFl: string;
  wopPremium2: number;
  wopPremiumQuarterly: number;
  wopPremiumHalfYearly: number;
  wopPremiumMonthly: number;
  wopPremium2Quarterly: number;
  wopPremium2HalfYearly: number;
  wopPremium2Monthly: number;
  baseSumAssuredQuarterly: number;
  baseSumAssuredHalfYearly: number;
  baseSumAssuredMonthly: number;
  wopPremium3: number;
  wopPremium3Quarterly: number;
  wopPremium3HalfYearly: number;
  wopPremium3Monthly: number;

  wopPremiumField: number;
  wopPremiumField2: number;
  wopPremiumField3: number;

  tripTypeCd: string;
  geographyCd: string;
  visitPurposeCd: string;
  maxTripPeriod: number;
  visitedTabs: string;
}
