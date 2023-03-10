
function Page() {
    return (
        <div className="main-container">
             {/* <Greeting /> */}
            <HeaderInfo />
             <Tasks />
            <FooterInfo />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))