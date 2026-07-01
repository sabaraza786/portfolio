import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-6 grid-bg text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-primary-500">error 404</p>
        <h1 className="mt-4 font-display text-6xl sm:text-8xl font-bold gradient-text">
          404
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          This route doesn't exist — maybe it moved, maybe it never did.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <HiOutlineHome /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
