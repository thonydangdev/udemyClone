import { HeaderOnly } from '../Layout/';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Upload from '../pages/Upload';

const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
