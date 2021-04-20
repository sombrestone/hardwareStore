import Administration from '../pages/administration/Administration'

const config={
    logo: "AppLogo",
    routes:[
        {path:'/services',page: Administration,description: 'Услуги',isAdmin: false},
        {path:'/samples',page: Administration,description: 'Примеры работ', isAdmin:false},
        {path:'/administration',page: Administration,description: 'Администрирование', isAdmin:true},
    ]
}

 export default config;