import {motion} from 'framer-motion';

export default function SlideIn({children, duration = 1}) {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: duration}}
        >
            {children}
        </motion.div>
    );
}
