import React from "react";
import styles from './styles.module.css';
import style from "./style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {

    const handleLogout =()=>{
             localStorage.removeItem("token");
             window.location.reload();
    }
    return (
        <div className="hello">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand active" href="front.html">ChessNation</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="home.html">Play</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Learn.html">Learn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Aboutus.html">AboutUs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Puzzles.html">Puzzles</a>
                    </li>
                    <button className={style.white_btn} onClick={handleLogout}>
                     LogOut
                    </button>
                </ul>
            </div>
        </div>
    </nav>

    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/1400x400/?chess" className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to Chess Nation</h2>
                    <p>Chess News, Development and Trends</p>
                    <button class="btn btn-danger">Learn</button>
                    <button class="btn btn-primary">Play</button>
                    <button class="btn btn-success">Enjoy</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1400x400/?chessgame" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h2>The Best Online Chess Platform</h2>
                    <p>Chess News, Development and Trends</p>
                    <button class="btn btn-danger">Learn</button>
                    <button class="btn btn-primary">Play</button>
                    <button class="btn btn-success">Enjoy</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1400x400/?chesspiece" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h2>Award winning Platform</h2>
                    <p>Chess News, Development and Trends</p>
                    <button class="btn btn-danger">Learn</button>
                    <button class="btn btn-primary">Play</button>
                    <button class="btn btn-success">Enjoy</button>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div className="container my-4">
        <div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="mb-0">India beats world champion</h4>
                        <div className="mb-1 text-muted">Apr 25,2022</div>
                        <p className="card-text mb-auto"> 16-year-old Indian Grandmaster R Praggnanandhaa defeating world champion, Magnus Carlsen.</p>
                        <a href="https://sports.ndtv.com/chess/youve-made-india-proud-sachin-tendulkar-congratulates-r-praggnanandhaa-on-beating-magnus-carlsen-2780960" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="newsimg\news1.webp" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="mb-0">A lifetime opportunity for youngsters, says Anand </h4>
                        <div className="mb-1 text-muted">April 18, 2022</div>
                        <p className="mb-auto">The 100-day countdown for the 44th Chess Olympiad, to be held here later this year, began on Monday with the legendary Viswanathan Anand terming ...</p>
                        <a href="https://indianexpress.com/article/sports/chess/a-lifetime-opportunity-for-youngsters-says-anand-as-100-day-countdown-for-chess-olympiad-begins-7875193/" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="newsimg\new2.jpg" alt=""/>

                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-danger">FrontEnd</strong>
                        <h3 className="mb-0">Bootstrap Templates</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                            lead-in to additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?frontend" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-warning">Python</strong>
                        <h3 className="mb-0">Learn Python</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                            additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?code" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>© 2022 Chess Nation, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
        </div>);

        {/* // <div className={styles.main_containers}>
        //     <nav className={styles.navbar}>
        //         <h1>ChessWizards</h1>
                 

        //     </nav>
        // </div> */}
      
}
 
export default Main;