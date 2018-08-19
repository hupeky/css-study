import React from 'react'
import classes from './Selectors.css'
const Selectors = () => {
    return (
        <div>
            <h2>Selecting </h2>
            <p>first</p>
            <span>
                <p>child</p>
            </span>
            <p>Second</p>

            <abbr title="target css via attributes" >this is an attribute target</abbr><br />
            <abbr myattrib="target css via attributes" >this is a custom attribute target</abbr><br />

            <a href="http://kye.tech">custom attrib selector, start of value</a><br />
            <img role="presentation" src="http://kye.tech/wp-content/uploads/2015/10/3d-text-effect.jpg" /> custopm selector end of attrib<br />

            <h2>psuedo elements </h2>

            <h3>Psuedo elements</h3>
            <section className={classes.chapter}>
                <p>In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the army. Having completed my studies there, I was duly attached to the Fifth Northumberland Fusiliers as Assistant Surgeon.</p>
            </section>
            <h4>nth child</h4>
            <div className={classes.nthChild}>
                <p>nth child</p>
                <p>p:nth-child(2)</p>
                <p>nth child</p>
                <p>p:nth-child(2n)</p>
                <p>nth child</p>
                <p>p:nth-child(2n)</p>
            </div>
            <h4>nth Child Of Type</h4>
            <div className={classes.nthChildOfType}>
                <p>p:nth-of-type(2n)</p>
                <p>p:nth-of-type(2n)</p>
                <div>igonre div tag</div>
                <div>igonre div tag</div>
                <div>igonre div tag</div>
                <p>p:nth-of-type(2n)</p>
                <p>p:nth-of-type(2n)</p>
            </div>
        </div>
    )
}

export default Selectors
