
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */'../layouts/DayBookLayout'),
    children: [
        { 
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "no-daybook-entry" */'../pages/NoEntrySelected')
        },

        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */'../pages/EntryPage')
        }
    ]
}