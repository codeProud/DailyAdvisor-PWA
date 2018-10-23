import conversation from '../assets/icons/navigation/conversation.svg';
import dashboard from '../assets/icons/navigation/dashboard.svg';
import events from '../assets/icons/navigation/events.svg';
import meal_plans from '../assets/icons/navigation/meal_plans.svg';
import people from '../assets/icons/navigation/people.svg';
import shop_list from '../assets/icons/navigation/shop_list.svg';
import training_plans from '../assets/icons/navigation/training_plans.svg';

export const bottomNavItems = [
    {
        id: 0,
        name: 'dashboard',
        url: '/main',
        icon: dashboard,
        payload: {
            alt: 'Dashboard',
        },
    },
    {
        id: 1,
        name: 'people',
        url: '/main/people',
        icon: people,
        payload: {
            alt: 'People',
        },
    },
    // {
    //     id: 1,
    //     name: 'conversation',
    //     url: '/main/conversation',
    //     icon: conversation,
    //     payload: {
    //         alt: 'Conversation',
    //     },
    // },
    {
        id: 2,
        name: 'events',
        url: '/main/events',
        icon: events,
        payload: {
            alt: 'Events',
        },
    },
    {
        id: 3,
        name: 'meal_plans',
        url: '/main/meal_plans',
        icon: meal_plans,
        payload: {
            alt: 'Meal plans',
        },
    },
    {
        id: 4,
        name: 'shop_list',
        url: '/main/shop_list',
        icon: shop_list,
        payload: {
            alt: 'Shopping list',
        },
    },
    {
        id: 5,
        name: 'training_plans',
        url: '/main/training_plans',
        icon: training_plans,
        payload: {
            alt: 'Training plans',
        },
    },
];
