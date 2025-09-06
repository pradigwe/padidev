import techStack from '../data/techStack.json'

interface Tech {
    id: number;
    name: string;
    // icon: string;
    category: 'frameworks' | 'technologies' | 'tools';
}

function listTools() {
    // affirms that the array matches the interface
    const techs = techStack as Tech[];
    console.log(techs);
    return techs.map((tech) => (
        <li key={tech.id} className={`tech-card ${tech.category}`} >{tech.name}</li>
    ));
}

function Technologies() {
    return (
        <section>
            <h2>Technologies & Tools</h2>
            <ul>
                <li className='tech-category all'>All</li>
                <li className='tech-category frameworks' >Frameworks</li>
                <li className='tech-category technologies'>Technologies</li>
                <li className='tech-category tools'>Tools</li>
            </ul>
            <div className='divider'></div>
            <ul>{listTools()}</ul>
            <div>
                
            </div>
        </section>
    )
}

export default Technologies;