export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Store: undefined;
  MyPage: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  CategoryDetail: {
    categoryId: string;
    categoryName: string;
    categoryColor: string;
  };
};

