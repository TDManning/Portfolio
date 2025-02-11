import { motion } from "framer-motion";

const AnimatedDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
