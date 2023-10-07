import React from "react"

export default function Dashboard(props: any) {
    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        const makeRequest = async () => {
            const res = await fetch("/api/users/me", { credentials: "include" })
            const json = await res.json()
            const { user : { projects }} = json
            setProjects(projects)
        }   
        makeRequest()
    }, [])
    return (
        <>
        <h1>Dashboard</h1>
        <pre>moodboard</pre>
        <h2>All active services</h2>
        <ul>
            <li>✍️ PublisherPress</li>
            <li>📝 FormPro</li>
        </ul>
        <div>
            <pre>{JSON.stringify({ projects }, null, 2)}</pre>
        </div>
        <h2>Start something new</h2>
        <h3>Getting online services</h3>
        <div>
            <div>
                <h4>🪁 Kite</h4>
                <p>Kites are light projects</p>
                <h4>Great for</h4>
                <ul>
                    <li>Batteries included themes & features</li>
                    <li>Portfolios & presence</li>
                    <li>Side hustles</li>
                    <li>Hobby sites & non-profit ventures</li>
                </ul>
                <p>Cost: <pre>£2/pcm</pre></p>
                <button>Start a new Kite</button>
            </div>
            <div>
                <h4>⛅️ Cloud</h4>
                <p>Clouds are live projects</p>
                <h4>Great for</h4>
                <ul>
                    <li>Online stores</li>
                    <li>Native Apps</li>
                    <li>Bespoke designs</li>
                    <li>The technically confident</li>
                </ul>
                <p>Cost: <pre>£10/pcm</pre></p>
                <button>Start a new Cloud</button>
            </div>
            <div>
                <h4>🛸 UFO</h4>
                <p>You tell us!</p>
                <h4>Great for</h4>
                <ul>
                    <li>Premium support</li>
                    <li>Partnerships</li>
                    <li>Bespoke services</li>
                    <li>In-house design services</li>
                    <li>Exposure to a network of professional creatives</li>
                </ul>
                <p>Cost: <pre>POA</pre></p>
                <button>Start a new UFO</button>
            </div>
        </div>
        </>
    )
}