export const headerLinks = [
    {
    label: 'Home',
    route: '/',
    },
    {
        label: 'Create Event',
        route: '/events/create',
    },
    {
        label: 'My Profile',
        route: '/profile',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    ImageUrl: '',
    startDataTime: new Date(),
    endDataTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}




