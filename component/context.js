import { createContext, useContext, useState } from 'react';
const blogDataContext = createContext();//for blog
const pricingDataContext = createContext();
const testimonyDataContext =createContext();
const clientDataContext = createContext();
const portfolio2DataContext = createContext();
const productsDataContext = createContext();

export function BlogDataProvider({ children }) {
    const [blogsData, setBlogData] = useState([]);
  
    return (
      <blogDataContext.Provider value={{ blogsData, setBlogData}}>
        {children}
      </blogDataContext.Provider>
    );
   
      
  }
  export function useBlogData() {
    return useContext(blogDataContext);
  }
  

  export function pricingDataProvider({children}) {
    const [pricingData,setPricingData] = useState([]);
    return (
        <pricingDataContext.Provider value= {{pricingData,setPricingData}}>
            {children}</pricingDataContext.Provider>
    );
  }
 export function usePricingData( ) {
    return useContext(pricingDataContext);
 }
 export function testimonyDataProvider({children}) {
    const [testimonyData,setTestimonyData] = useState([]);
    return (
        <testimonyDataContext.Provider value= {{pricingData,setPricingData}}>
            {children}</testimonyDataContext.Provider>
    );

 }
 export function testimonyData( ) {
    return useContext(testimonyDataContext);
 }

 export function ClientDataProvider({ children }) {
    const [clientData, setClientData] = useState([]);
  
    return (
      <clientDataContext.Provider value={{ clientData, setClientData }}>
        {children}
      </clientDataContext.Provider>
    );
  }
  export function useClientData() {
    return useContext(clientDataContext);
  }
  

  export function Portfolio2DataProvider({ children }) {
    const [portfolio2Data, setPortfolio2Data] = useState([]);
  
    return (
      <portfolio2DataContext.Provider value={{ portfolio2Data, setPortfolio2Data }}>
        {children}
      </portfolio2DataContext.Provider>
    );
  }
  export function usePortfolio2Data() {
    return useContext(portfolio2DataContext);
  }
    

  export function ProductsDataProvider({ children }) {
    const [productsData, setProductsData] = useState([]);
  
    return (
      <productsDataContext.Provider value={{ productsData, setProductsData }}>
        {children}
      </productsDataContext.Provider>
    );
  }
  
  export function useProductsData() {
    return useContext(productsDataContext);
  }
  