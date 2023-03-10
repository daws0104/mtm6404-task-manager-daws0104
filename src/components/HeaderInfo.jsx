import React from 'react';

class Greeting extends React.Component{
    render() {
        <h3>eee</h3>
    }
}





const HeaderInfo = () => {
    //  const date = new Date();
    //  const hour = date.getHours();
    return (
        <header>
             {/* <h3>Good</h3> {hour>=12 ? hour=16 ? }  */}
            <h1 className = "module">Taskmanager for Games</h1>
            <nav>
                <h2 className = "nav-title">Links to game resources</h2>
                <ul className = "nav-list">
                    <li><a href="https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki" target= "__blank" className = "wiki-site">FF14 wiki</a></li>
                    <li><a href="https://terraria.fandom.com/wiki/Terraria_Wiki" target= "__blank" className = "wiki-site">Terraria wiki</a></li>
                    <li><a href="https://satisfactory.fandom.com/wiki/Satisfactory_Wiki" target= "__blank" className = "wiki-site">Satisfactory wiki</a></li>
                    <li><a href="https://na.finalfantasyxiv.com/lodestone/" target= "__blank" className = "wiki-site">FF14 lodestone</a></li>
                    <li><a href="https://ffxivcollect.com/" target= "__blank" className = "wiki-site">FF14 collect</a></li>
                    </ul>
                </nav>
            </header>
    );
    }
export default HeaderInfo;