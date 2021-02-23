// import React, { Component } from "react";
// import Header from "./Header";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";

// class PortfolioContainer extends Component {
//     state = {
//         currentPage: "About"
//     };


//     pageChange() {
//         if (this.state.currentPage === "About") {
//             return <About />
//         } else if (this.state.currentPage === "Contact") {
//             return <Contact />
//         } else if (this.state.currentPage === "Portfolio") {
//             return <Portfolio />
//         }
//     }


//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };


//     render() {
//         return (
//             <div>
//                 <Header
//                     currentPage={this.state.currentPage}
//                     handlePageChange={this.handlePageChange}
//                 />
//                 {this.pageChange()}
//             </div>
//         );
//     }
// }

// export default PortfolioContainer;
