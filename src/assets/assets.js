import {
  ChartArea,
  ChartBar,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Folder,
  Home,
  ShoppingCart,
  SpaceIcon,
  Star,
  StarHalf,
  Tag,
  User,
  Users,
} from "lucide-react";
import { CiSettings } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrUnorderedList } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";

export const nav_menu_data = [
  {
    id: "dashboard",
    to: "/",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "orders",
    to: "/orders",
    label: "Orders",
    orderNum: 16,
    icon: GrUnorderedList,
  },
  {
    id: "products",
    to: "/categories",
    label: "Products",
    icon: Tag,
  },
  {
    id: "categories",
    to: "/categories",
    label: "Categories",
    icon: Folder,
  },
  {
    id: "customers",
    to: "/customers",
    label: "Customers",
    icon: Users,
  },
  {
    id: "reports",
    to: "/reports",
    label: "Reports",
    icon: IoMdStats,
  },
  {
    id: "coupons",
    to: "/coupons",
    label: "Coupons",
    icon: Star,
  },
  {
    id: "inbox",
    to: "/inbox",
    label: "Inbox",
    icon: ChartArea,
  },
  {
    id: "Knowledge Base",
    to: "/base",
    label: "Knowledge Base",
    icon: FaRegQuestionCircle,
  },
  {
    id: "Product Updates",
    to: "/productUpdates",
    label: "Product Updates",
    icon: Tag,
  },
  {
    id: "Personal Settings",
    to: "/personalSeting",
    label: "Personal Settings",
    icon: User,
  },
  {
    id: "Global Settings",
    to: "/globalSettings",
    label: "Global Settings",
    icon: CiSettings,
  },
];

export const dashFrames = [
  {
    id: 1,
    number: "$10.540",
    span: "Total Revenue",
    number2: "22.45%",
    icon: ChevronUp,
    icon2: DollarSign,
  },
  {
    id: 2,
    number: "1,056",
    span: "Orders",
    number2: "15.34%",
    icon: ChevronUp,
    icon2: ShoppingCart,
  },
  {
    id: 3,
    title: "Unique Visits",
    number: "5.420",
    number2: "10.24%",
    icon: ChevronDown,
    icon2: "./icon_1.png",
  },
  {
    id: 4,
    title: "New Users",
    number: "1.650",
    number2: "15.34%",
    icon: ChevronUp,
    icon2: "./icon_2.png",
  },
  {
    id: 5,
    title: "Existing Users",
    number: "9.653",
    number2: "22.45%",
    icon: ChevronUp,
    icon2: "./icon_3.png",
  },
];

export const chartData = [
  {
    number: [0, 10, 20, 30, 40, 50],
  },
  {
    timers: [
      "4am",
      "5am",
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12am",
      "1pm",
      "2pm",
      "3pm",
    ],
  },
];
