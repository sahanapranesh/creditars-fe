
// utils/types.ts
  export interface Company {
    companyName: string;
    fileUploadLocation: string;
    statements: Statement[]
  }

  export type Statement = {
    grossProfit: string;
    incomeBeforeTaxes: string;
    costOfSales: string;
    depreciation: string;
    totalExpenses: string;
    totalSales: string;
    interestExpense: string;
    financialYear: string;
    totalCurrentAssets: string;
    totalCurrentLiabilities: string;
    totalNonCurrentAssets: string;
    totalNonCurrentLiabilities: string;
    hstReceivable: string;
    interestReceivable: string;
  }

  export type FileUploadResponse = {
    filePath: string;
    name: string;
  }
  
  export type ApiResponse<T> = {
    data: T;
    error?: string;
  };
  
