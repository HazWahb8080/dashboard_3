import {
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Invoices from "../components/nav/Invoices";
import Dashboard from "../components/nav/Dashboard";
import Estimates from "../components/nav/Estimates";
import Transaction from "../components/nav/Transaction";
import Products from "../components/nav/Products";
import Users from "../components/nav/Users";
import Settings from "../components/nav/Settings";

export const navLinks = [
  {
    id: 0,
    title: "Invoices",
    icon: <ReceiptPercentIcon className="nav__icon" />,
    component: <Invoices />,
  },
  {
    id: 1,
    title: "Dashboard",
    icon: <Squares2X2Icon className="nav__icon" />,
    component: <Dashboard />,
  },
  {
    id: 2,
    title: "Estimates",
    icon: <DocumentTextIcon className="nav__icon" />,
    component: <Estimates />,
  },
  {
    id: 3,
    title: "Transaction",
    icon: <ArrowsUpDownIcon className="nav__icon" />,
    component: <Transaction />,
  },
  {
    id: 4,
    title: "Products",
    icon: <ShoppingCartIcon className="nav__icon" />,
    component: <Products />,
  },
  {
    id: 5,
    title: "Team",
    icon: <UsersIcon className="nav__icon" />,
    component: <Users />,
  },
  {
    id: 6,
    title: "settings",
    icon: <Cog6ToothIcon className="nav__icon" />,
    component: <Settings />,
  },
];

export const avatar =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

export const analyticsBlocks = [
  {
    id: 0,
    title: "Total Earnings",
    percent: "w-[70%]",
    value: "12,495",
  },
  {
    id: 1,
    title: "Total Spending",
    percent: "w-[40%]",
    value: "09,495",
  },
  {
    id: 2,
    title: "Goal This Month",
    percent: "w-[90%]",
    value: "24,435",
  },
];

export const invoicesSection = [
  {
    id: 0,
    title: "INVOICE NAME",
    items: ["MailChimp Support", "Cash Withdrawal", "Ronald GmbH"],
  },
  {
    id: 1,
    title: "INVOICE ID",
    items: [
      "Invoices V12-345679",
      "Invoices V13-345869",
      "Invoices V14-354786",
    ],
  },
  {
    id: 2,
    title: "DATE",
    items: ["28-02-22", "14-04-22", "05-06-22"],
  },
  {
    id: 3,
    title: "Amount",
    items: ["$320,00", "$320,00", "$320,00"],
  },
];

export const ActivityItems = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Aiony Haust",
    time: "2 minutes ago",
    invoice: "V12-345636",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Rahija Jaban",
    time: "9 minutes ago",
    invoice: "V12-345636",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Aiony Haust",
    time: "2 minutes ago",
    invoice: "V12-345636",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
    name: "Batin Hure",
    time: "2 minutes ago",
    invoice: "V12-3457678",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Erama Kunta",
    time: "7 minutes ago",
    invoice: "V12-336462",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Aiony Haust",
    time: "2 minutes ago",
    invoice: "V12-345636",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
    name: "Batin Hure",
    time: "2 minutes ago",
    invoice: "V12-3457678",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Erama Kunta",
    time: "7 minutes ago",
    invoice: "V12-336462",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Aiony Haust",
    time: "2 minutes ago",
    invoice: "V12-345636",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
    name: "Batin Hure",
    time: "2 minutes ago",
    invoice: "V12-3457678",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Erama Kunta",
    time: "7 minutes ago",
    invoice: "V12-336462",
  },
];
