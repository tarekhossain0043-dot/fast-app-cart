import { ChartArea, ChartBar, Folder, Home, Star, StarHalf, Tag, User, Users } from "lucide-react";
import { CiSettings } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrUnorderedList } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";

export const nav_menu_data = [
    {
        id : 'dashboard',
        to : '/',
        label : 'Dashboard',
        icon : Home
    },
    {
        id : 'orders',
        to : '/orders',
        label : 'Orders',
        icon : GrUnorderedList
    },
    {
        id : 'products',
        to : '/categories',
        label : 'Products',
        icon : Tag
    },
    {
        id : 'categories',
        to : '/categories',
        label : 'Categories',
        icon : Folder
    },
    {
        id : 'customers',
        to : '/customers',
        label : 'Customers',
        icon : Users
    },
    {
        id : 'reports',
        to : '/reports',
        label : 'Reports',
        icon : IoMdStats
    },
    {
        id : 'coupons',
        to : '/coupons',
        label : 'Coupons',
        icon : Star
    },
    {
        id : 'inbox',
        to : '/inbox',
        label : 'Inbox',
        icon : ChartArea
    },
    {
        id : 'Knowledge Base',
        to : '/base',
        label : 'Knowledge Base',
        icon : FaRegQuestionCircle
    },
    {
        id : 'Product Updates',
        to : '/productUpdates',
        label : 'Product Updates',
        icon : Tag
    },
    {
        id : 'Personal Settings',
        to : '/personalSeting',
        label :'Personal Settings',
        icon : User
    },
    {
        id : 'Global Settings',
        to : '/globalSettings',
        label :'Global Settings',
        icon : CiSettings
    }
]