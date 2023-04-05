import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Login } from './components/Login/Login'
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { Profile } from './components/Profile/Profile';
import { CreateArticle } from './components/Articles/CreateArticle'

import { Main } from './components/Main/Main';

import { TunedCars } from './components/TunedCars/TunedCars';
import { TunedCarDetails } from './components/TunedCars/TunedCarDetails';



import { Articles } from './components/Articles/Articles';
import { CreateTunedCar } from './components/TunedCars/CreateTunedCar';

import { AuthProvider } from './contexts/AuthContext';
import { ArticleProvider } from './contexts/ArticleContext';

function App() {
    return (

        <BrowserRouter>

            <AuthProvider>
                <ArticleProvider>

                    <Header />
                    {/* <Main /> */}

                    <main id="main">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />

                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            {/* <Route path='/profile/:gameId' element={<Profile />} /> */}
                            <Route path='/profile' element={<Profile />} />

                            <Route path="/articles" element={<Articles />} />
                            <Route path="/create-article" element={<CreateArticle />} />

                            {/* <Route path='/create' element={<Create />} />
                        <Route path='/articles/create/' element={<CreateArticle />} /> */}

                            {/* <Route path="/articles" element={<Articles />} >
                            <Route path="/articles/create" element={<CreateArticle />} />
                        </Route> */}

                            {/* <Route path='/create/article' element={<CreateArticle />} />
                        <Route path='/create/tunedcar' element={<CreateArticle />} /> */}


                            <Route path='/tunedcars' element={<TunedCars />} />
                            <Route path='/tunedcar' element={<TunedCarDetails />} />
                            <Route path='/create-tunedcar' element={<CreateTunedCar />} />



                            {/* <Route path='/articles' element={<Articles />} /> */}


                            {/* <Route element={<RouteGuard />}>
                        <Route path='/catalog/:gameId/edit' element={
                            <GameOwner>
                                <EditGame />
                            </GameOwner>
                        } />
                        <Route path='/create-carpost' element={<CreateCar />} />
                        <Route path='/create-article' element={<CreateArticle />} />

                    </Route> */}


                            {/* <Route path='/create-game' element={
                            <RouteGuard>
                                <CreateGame onCreateGameSubmit={onCreateGameSubmit} />
                            </RouteGuard>
                        } /> */}
                        </Routes>


                    </main>

                    <Footer />

                </ArticleProvider>

            </AuthProvider>

        </BrowserRouter>



    );
}

export default App;
