import React from 'react'
import classes from './FlexBoxColomns.css'

const FlexBoxColomns = () => {
    return (
        <div className={classes.flexWrap}>
            <div>
                <p>flex-direction:column;</p>
                <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                    <menu className={[classes.boxAll, classes.nav1].join( ' ' )} >
                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                    </menu>
                </div>
            </div>

            <div>
                <p>  .box2 li ;</p>
                <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                    <menu className={[classes.boxAll, classes.box2].join( ' ' )} >
                        <li><a href=""> item 1</a></li>
                    </menu>
                </div>
            </div>

            <div>
                <p>  flex-wrap:wrap;  </p>
                <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                    <menu className={[classes.boxAll, classes.box3].join( ' ' )} >
                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                        <li><a href=""> item 3</a></li>
                    </menu>
                </div>
            </div>

            <div>
                <p>  align-items:stretch; </p>
                <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                    <menu className={[classes.boxAll, classes.box4].join( ' ' )} >
                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                        <li><a href=""> item 3</a></li>
                    </menu>
                </div>
            </div>

            <div>
                <p>  align-items:stretch; </p>
                <div className={classes.flex} > {/* if you want ie11 to respect vertical stretch there needs to be a parent flex */}
                    <menu className={[classes.boxAll, classes.box5].join( ' ' )} >
                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                        <li><a href=""> item 3</a></li>
                        <li><a href=""> item 4</a></li>

                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                        <li><a href=""> item 3</a></li>
                        <li><a href=""> item 4</a></li>

                        <li><a href=""> item 1</a></li>
                        <li><a href=""> item 2</a></li>
                        <li><a href=""> item 3</a></li>
                        <li><a href=""> item 4</a></li>
                    </menu>
                </div>
            </div>
        </div>
    )
}

export default FlexBoxColomns
