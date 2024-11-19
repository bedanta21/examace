import { motion } from "framer-motion";
import images from "../../constants/images";

const BlogDashboard = () => {
    return (
        <div className="flex flex-row justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
            >
                <div className="w-72 h-72 mt-5">
                    <img src={images.Laditya} className="w-full h-full object-cover rounded-full" />
                </div>
            </motion.div>
        </div>
    )
}

export default BlogDashboard