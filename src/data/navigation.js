import { FaThLarge, FaSearch, FaInfoCircle, FaProjectDiagram } from "react-icons/fa"

const menuNavigation = [
    {
        title: 'Dashboard',
        icon: <FaThLarge size={20} />,
        path: '/'
    },
    {
        title: 'Pencarian',
        icon: <FaSearch size={20} />,
        path: '/pencarian'
    },
    {
        title: 'Integrasi',
        icon: <FaProjectDiagram size={23} />,
        path: '/integrasi'
    },
    {
        title: 'About',
        icon: <FaInfoCircle size={25} />,
        path: '/about'
    },
]

export default menuNavigation;