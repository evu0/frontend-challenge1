import Card from "./Card";
import styles from '../styles/Plan.module.css'
import { useState } from 'react';
import { motion } from "framer-motion";


const Plan = () => {
    const [plan, setPlan] = useState(1);
    const handlePlan = () => {
        if (plan === 1) {
            setPlan(2)
        } else if (plan === 2) {
            setPlan(3)
        } else if (plan === 3) {
            setPlan(1)
        }else{
            return
        }
    }
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }
    
    return (  
        <Card>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Choose a plan</h1>
                    <p>Select the offer that suits your needs</p>
                </div>
                <div className={styles.content}>
                    
                    
                    {plan === 1 &&
                    <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    className={styles.wrapper}
                    >
                    <div className={styles.plan}>
                        <div className={styles.plan_image}></div>
                        <div className={styles.plan_title}>
                            <h3>Free</h3>
                            <p> <b>$0</b> / user</p>
                        </div>
                    </div>

                    <div className={styles.plan_description}>
                            <ul>
                                <li>
                                    7 days free trial
                                </li>
                                <li>
                                    Limited tutorials
                                </li>
                                <li>
                                    10 Gb/s storage
                                </li>
                            </ul>
                    </div>
                    </motion.div>}
                    

                    
                    {plan === 2 &&
                    <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    className={styles.wrapper}
                    >
                    <div className={styles.plan}>
                        <div className={styles.plan_image2}></div>
                        <div className={styles.plan_title}>
                            <h3>Basic</h3>
                            <p> <b>$4.99</b> / user</p>
                        </div>
                    </div>

                    <div className={styles.plan_description}>
                            <ul>
                                <li>
                                    Unlimited projects
                                </li>
                                <li>
                                    Unlimited tutorials
                                </li>
                                <li>
                                    1 Tb/s storage
                                </li>
                            </ul>
                    </div>
                    </motion.div>}
                    

                    
                    {plan === 3 &&
                    <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    className={styles.wrapper}
                    >
                    <div className={styles.plan}>
                        <div className={styles.plan_image3}></div>
                        <div className={styles.plan_title}>
                            <h3>Professional</h3>
                            <p> <b>$9.99</b> / user</p>
                        </div>
                    </div>

                    <div className={styles.plan_description}>
                            <ul>
                                <li>
                                    Access to PRO features
                                </li>
                                <li>
                                    Continuous support
                                </li>
                                <li>
                                    200 Tb/s storage
                                </li>
                            </ul>
                    </div>
                    </motion.div>}
                    
                    <div className={styles.button}>
                        <button className={styles.back} onClick={handlePlan}>
                            {'<'}
                        </button>

                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        className={styles.subscribe}>
                            Subscribe
                        </motion.button>
                    </div>

                </div>
            </div>
        </Card>
    );
}
 
export default Plan;