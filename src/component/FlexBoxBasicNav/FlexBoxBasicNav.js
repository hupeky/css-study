import React from 'react'
import classes from './FlexBoxBasicNav.css'

const FlexBoxBasicNav = () => {
    return (
        <div >
            <h3>Nav 1</h3>
            <p>Uses margin auto left and right on first and last child to take all other space, fucked in ie 11</p>
            <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                <menu className={[classes.navAll, classes.nav1].join( ' ' )} >
                    <li><a href=""> item 1</a></li>
                    <li className={classes.pushed}><a href=""> item 1</a></li>
                    <li><a href=""> item 1</a></li>
                    <li><a href=""> item 1</a></li>
                </menu>
            </div>

            <h3>Nav 2</h3>
            <p>Uses margin auto left and right on first and last child to take all other space, fucked in ie 11</p>
            <menu className={[classes.navAll, classes.nav2].join( ' ' )} >
                <li><a href=""> item 1</a></li>
            </menu>

            <h3>Nav 3</h3>
            <p>justify-content: space-between;</p>
            <menu className={[classes.navAll, classes.nav3].join( ' ' )} >
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
            </menu>

            <h3>Nav 4</h3>
            <p>justify-content: flex-end;</p>
            <menu className={[classes.navAll, classes.nav4].join( ' ' )} >
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
            </menu>

            <h3>Nav 5</h3>
            <p>align-items: flex-start; stops children stretching full hieght</p>
            <menu className={[classes.navAll, classes.nav5].join( ' ' )} >
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
            </menu>

            <h3>Nav 6</h3>
            <p> justify-content: center; align-items: center</p>
            <menu className={[classes.navAll, classes.nav6].join( ' ' )} >
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li className={classes.active}><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
            </menu>
            <h3>Nav 7</h3>
            <p> justify-content: flex-end; align-items: center</p>
            <menu className={[classes.navAll, classes.nav7].join( ' ' )} >
                <li><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li className={classes.active}><a href=""> item 1</a></li>
                <li><a href=""> item 1</a></li>
                <li className={classes.myDiv}><a>hello</a></li>
            </menu>
        </div>
    )
}

export default FlexBoxBasicNav
