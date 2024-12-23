import Header from "./../components/header/Header"

/*Здесь основной контент главной страницы портфолио*/

const Home = () => {
    return ( 
        <>
            <Header />
            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, ReactJS (React router, React hooks), HTML, CSS, NPM</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Soft skills and tools</h2>
                                <p>GitHub, Linux, Figma, VScode, English (A2)</p>
                            </li>
                        </ul>

                </div>
            </main>
        </>
     );
}
 
export default Home;