import { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <a className="navbar-brand col-lg-2">
                        PokeProfiles
                    </a>
                </nav>
            </div>

        )
    }

}