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
