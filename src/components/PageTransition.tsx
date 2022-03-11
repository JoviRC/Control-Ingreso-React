import { motion } from "framer-motion";

const AnimationPage: React.FC = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "circInOut", duration: 0.4 }}
        >
            <div style={{ display: "inline-block" }}>{children}</div>
        </motion.div>
    );
};
export default AnimationPage;
