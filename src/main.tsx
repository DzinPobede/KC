import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Coders from "./components/Coders/Coders";
import BankStatements from "./components/BankStatementss/BankStatements";
import AccountingLetters from "./components/AccountingLetters/AccountingLetters";
import SalesOrder from "./components/SalesOrder/SalesOrder";
import Export from "./components/Export/Export";
import Invoice from "./components/Invoice/Invoice";
import App from "./App";
import WareHouse from "./components/Coders/SideBar/WareHouse/WareHouse";
import Partners from "./components/Coders/SideBar/Partners/Partners";
import PriceList from "./components/Coders/SideBar/Pricelist/PriceList";
import Articles from "./components/Coders/SideBar/Articles/Articles";
import ProformaInvoice from "./components/Invoice/SideBar/ProformaInvoice/ProformaInvoice";
import DeliveryNote from "./components/Invoice/SideBar/DeliveryNote/DeliveryNote";
import SalesInvoice from "./components/Invoice/SideBar/SalesInvoice/SalesInvoice";
import PurchaseInvoice from "./components/Invoice/SideBar/PurchaseInvoice/PurchaseInvoice";
import CreditNote from "./components/Invoice/SideBar/CreditNote/CreditNote";
import Payments from "./components/BankStatementss/SideBar/Payments/Payments";
import CustomerPayment from "./components/BankStatementss/SideBar/CustomerPayment/CustomerPayment";
import Compensations from "./components/BankStatementss/SideBar/Compensations/Compensations";
import Demands from "./components/SalesOrder/SideBar/Demands/Demands";
import AdvanceToCustomers from "./components/BankStatementss/SideBar/AdvancesToCustomers/AdvanceToCustomers";
import AdvancesToSuppliers from "./components/BankStatementss/SideBar/AdvancesToSuppliers/AdvancesToSuppliers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
        children: [],
      },
      {
        path: "coders",
        element: <Coders />,
        children: [
          {
            path: "warehouse",
            element: <WareHouse />,
          },
          {
            path: "partners",
            element: <Partners />,
          },
          {
            path: "pricelist",
            element: <PriceList />,
          },
          {
            path: "articles",
            element: <Articles />,
          },
        ],
      },
      {
        path: "invoice",
        element: <Invoice />,
        children: [
          {
            path: "proformainvoice",
            element: <ProformaInvoice />,
          },
          {
            path: "deliverynote",
            element: <DeliveryNote />,
          },
          {
            path: "salesinvoice",
            element: <SalesInvoice />,
          },
          {
            path: "purchaseinvoice",
            element: <PurchaseInvoice />,
          },
          {
            path: "creditnote",
            element: <CreditNote />,
          },
        ],
      },
      {
        path: "bankstatements",
        element: <BankStatements />,
        children: [
          {
            path: "payments",
            element: <Payments/>,
          },
          {
            path: "customerpayment",
            element: <CustomerPayment />,
          },
          {
            path: "compensations",
            element: <Compensations/>,
          },
          {
            path: "advancetocustomers",
            element: <AdvanceToCustomers />,
          },
          {
            path: "advancestosuppliers",
            element: <AdvancesToSuppliers />,
          }
        ],
      },
      {
        path: "accountingletters",
        element: <AccountingLetters />,
      },
      {
        path: "salesorder",
        element: <SalesOrder />,
        children: [
          {
            path: "routes",
            element: <Routes />,
          },
          {
            path: "demands",
            element: <Demands />,
          }
        ],
      },
      {
        path: "export",
        element: <Export />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;