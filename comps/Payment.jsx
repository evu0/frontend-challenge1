import styles from '../styles/Payment.module.css';
import Card from './Card';
import { motion } from 'framer-motion';

const Payment = () => {
    return (  
        <Card>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.credit}>
                        <div className={styles.name}>
                            <h4>Susan Townley</h4>
                        </div>
                        <div className={styles.description}>
                            <span>xxxx1234</span>
                        </div>
                    </div>
                    <button className={styles.edit}></button>
                </div>

                <div tabindex="-1" className={`${styles.payment} ${styles.yearly}`}>
                    <div className={styles.recommended}></div>
                    <div className={styles.paymentinfo}>
                        <div className={styles.duration}>
                            <h4>Yearly</h4>
                            <h4>$120 / m</h4>
                        </div>
                        <div className={styles.description}>
                            <span>Pay for a full year</span>
                        </div>
                    </div>
                </div>

                <div tabindex="-1" className={`${styles.payment} ${styles.monthly}`}> {/* tabindex="-1" to make it focusable */}
                    <div className={styles.paymentinfo}>
                        <div className={styles.duration}>
                            <h4>Monthly</h4>
                            <h4>$20 / m</h4>
                        </div>
                        <div className={styles.description}>
                            <span>Pay monthly, cancel anytime.</span>
                        </div>
                    </div>
                </div>

                <div className={styles.button}>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    className={styles.purchase}>
                                Purchase
                    </motion.button>
                </div>

            </div>
        </Card>
    );
}
 
export default Payment;