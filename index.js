
function Page() {
    return (
        <div className="main-container">
            <HeaderInfo />
             <Tasks />
            <FooterInfo />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))