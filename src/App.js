import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './components/routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
// import axios from 'axios';
function App() {
    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             Accept: 'application/json, text/plain, */*',
    //             Authorization:
    //                 'Basic MUphWUs2ZHVoY29xdmQwMzc1UFZjN1lEQmwzdzlwdXhpbnlOOHV4ODpVVXBocDhZYjFOMWhoMXJWbVphSWx3ejBZZGR6WmF2dGRVZGpGTmlrOFZwdzRPMFhySXNxcVFMR1VQdGVKT2c3MVpoWlQyMkxkY2l6aFYyOUZ4T3BhU0dSdmhnS1V5VGlWWFY3WGMzVXlrNkFKajFreEpJeldxVnZITG0zNWVIaQ==',
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //     };
    //     axios
    //         // .get(`/api-2.0/courses/?search=Javascript`, config)
    //         .get(`/api-2.0/courses/851712`, config)
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
