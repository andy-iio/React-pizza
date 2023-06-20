import React from 'react';
import skip from './media/skip-logo.png';
import uber from './media/Uber-Eats-Logo.png';

function Menu() {
    return (
        <div className='main-container container'>
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="#">Toscano's Pizza</a>
                <a>555-555-XXXX</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='menu-header'>
                <h1 className='text-center '>Our Menu</h1> 
            </div>
            <div className="container-fluid mb-3">
                <div className="nav d-flex justify-content-center">
                    <button type="button" className="btn btn-light mx-3"><img src={skip} className="logo"></img></button>
                    <button type="button" className="btn btn-light ml-5"><img src={uber} className="logo2"></img></button>
                </div>
            </div>
            <div className="menu-section text-center" id="specialty">
                <div className="jumbotron jumbotron-fluid menu menu-specialty overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Specialty Pizzas</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h3>Farmhouse</h3>
                            <p>Tomato sauce, mozzarella cheese, mushrooms, zucchini, roasted red peppers, onion, grilled chicken breast, hot
                                peppers, and feta cheese.</p>
                            <p>$20.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Capricciosa</h3>
                            <p>Tomato sauce, mozzarella cheese, artichoke hearts, mushrooms, ham, roasted red peppers, and black olives.</p>
                            <p>$17.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Viennese</h3>
                            <p>Tomato sauce, mozzarella cheese, German sausage, oregano.</p>
                            <p>$13.99</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h3>Mushroom Lovers</h3>
                            <p>Tomato sauce, mozzarella cheese, extra extra mushrooms, artichoke hearts, and Parmesan cheese.
                            </p>
                            <p>$17.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Pesto</h3>
                            <p>Pesto sauce, mozzarella cheese, goat cheese, roasted red peppers, artichoke hearts, and Kalamata olives.</p>
                            <p>$18.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Super Meat Lovers </h3>
                            <p>Mozzarella cheese, pepperoni, ham, smoked sausage, smoked bacon, and prosciutto.</p>
                            <p>$13.99</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Bianca</h3>
                            <p>Pesto sauce, mozzarella cheese, ricotta cheese, olive oil, fresh basil, fresh garlic.</p>
                            <p>$17.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Three Meat</h3>
                            <p>Tomato sauce, mozzarella cheese, pepperoni, bacon, Italian sausage, and onions.</p>
                            <p>$18.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Italian</h3>
                            <p>Tomato sauce, mozzarella cheese, mushrooms, green peppers, black olives, Italian sausage, artichoke hearts,
                                and prosciutto.</p>
                            <p>$13.99</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-section text-center" id="classNameic">
                <div className="jumbotron jumbotron-fluid menu menu-classic overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Classic Pizzas</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h3>Canadian</h3>
                            <p>Tomato sauce, mozzarella cheese, pepperoni, mushrooms, and ham.</p>
                            <p>$15.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Pepperoni</h3>
                            <p>Tomato sauce, mozzarella cheese, pepperoni.</p>
                            <p>$15.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Hawaiian</h3>
                            <p>Tomato sauce, mozzarella cheese, ham, pineapple, and bacon.</p>
                            <p>$15.99</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Meat Lovers</h3>
                            <p>Tomato sauce, mozzarella cheese, pepperoni, bacon, and Italian sausage.</p>
                            <p>$15.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Vegetarian</h3>
                            <p>Tomato sauce, mozzarella cheese, mushrooms, tomatoes, and green peppers.</p>
                            <p>$15.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Deluxe</h3>
                            <p>Tomato sauce, mozzarella cheese, pepperoni, mushrooms, and green peppers.</p>
                            <p>$15.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="menu-section text-center" id="custom">
                <div className="jumbotron jumbotron-fluid menu menu-custom overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Custom</h2>
                            <p className="lead"><i>Make your own pizza</i></p>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <p><b>Small ($13.99), Medium ($15.99), Large ($18.99), Extra Large ($19.99)</b></p>
                    <p><i>Price includes cheese and two toppings. Choose from thin crust, regular crust, or gluten free crust.
                    <br></br>Each extra topping $1.25.</i></p>
                    <h3>Toppings:</h3>
                    <br></br>
                    <div className="row topping-list">
                        <div className="col-md-4">
                            <ul>
                                <li>Pepperoni</li>
                                <li>Bacon</li>
                                <li>Smoked Bacon*</li>
                                <li>Ham</li>
                                <li>Ground Beef</li>
                                <li>Italian Sausage (Regular or Hot)</li>
                                <li>Smoked Sausage*</li>
                                <li>Prosciutto*</li>
                                <li>Chicken Breast*</li>
                                <li>Feta</li>
                                <li>Ricotta Cheese</li>
                                <li>Goat Cheese</li>
                                <li>Extra Mozzarella Cheese</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>Onions (Regular or Red)</li>
                                <li>Green Peppers</li>
                                <li>Roasted Red Peppers</li>
                                <li>Pineapple</li>
                                <li>Zucchini</li>
                                <li>Broccoli</li>
                                <li>Spinach</li>
                                <li>Hot Peppers</li>
                                <li>Jalapeno Peppers</li>
                                <li>Artichoke Hearts</li>
                                <li>Mushrooms</li>
                                <li>Olives (Green, Black or Kalamata)</li>
                                <li>Tomatoes (Regular or Sun-Dried)</li>
                            </ul>
                        </div>
                    </div>
                    <p><i>* indicates double topping</i></p>
                </div>
            </div>
            <br></br>
            <div className="menu-section text-center" id="salad">
                <div className="jumbotron jumbotron-fluid menu menu-salads overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Salads</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Ceasar Salad</h3>
                            <p>Romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing</p>
                            <p>$8.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Greek Salad</h3>
                            <p>Tomatoes, cucumbers, red onions, feta cheese, and olives, tossed in a simple olive oil and lemon dressing</p>
                            <p>$8.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Garden Salad</h3>
                            <p>Mixed greens, cherry tomatoes, cucumbers, carrots, and italian dressing</p>
                            <p>$8.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="menu-section text-center" id="side">
                <div className="jumbotron jumbotron-fluid menu menu-sides overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Sides</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h3>Motzzarella Sticks <br></br></h3>
                            <p>Delicious battered and fried mozzarella cheese</p>
                            <p>$9.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Jalapeno Poppers <br></br>(10 pcs)</h3>
                            <p>Jalapenos stuffed with cream cheese and roasted red peppers</p>
                            <p>$11.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Chicken Nuggets <br></br> (10 pcs)</h3>
                            <p>Boneless chicken breast, seasoned to perfection, freshly breaded</p>
                            <p>$8.99</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h3>Wings (1 Pound)</h3>
                            <p>Hand tossed in your choice of Honey Garlic, BBQ, Hot or Mild Sauce</p>
                            <p>$10.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Cheese Sticks</h3>
                            <p>Our handmade pizza dough shaped into sticks and topped with mozzarella cheese</p>
                            <p>$10.99</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Garlic Bread</h3>
                            <p>Our handmade pizza dough topped with fresh garlic and butter</p>
                            <p>$5.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="menu-section text-center" id="Beverage">
                <div className="jumbotron jumbotron-fluid menu menu-bev overlay mb-5">
                    <div className="container">
                        <div className="text-center text-white hero-text">
                            <h2 className="display-3 main-text mb-3">Beverages</h2>
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-column justify-content-center mb-5">
                    <div>
                        <h3>Canned Pop</h3>
                        <p>$1.99</p>
                    </div>
                    <div>
                        <h3>Bottled Pop</h3>
                        <p>$2.99</p>
                    </div>
                    <div>
                        <h3>Juice</h3>
                        <p>$2.99</p>
                    </div>
                    <div>
                        <h3>Bottled Water</h3>
                        <p>$1.99</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Menu;