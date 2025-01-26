import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";;
import useMenu from "../hooks/useMenu";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="ml-6 lg:ml-14">
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <Link>
        <section className="mt-4">
          <hr className="my-5" />
          <h1 className="text-center md:text-4xl text-2xl font-[arial] font-semibold my-2">
            Our Menu
          </h1>
        </section>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-2 cursor-pointer mt-4">
          <AnimatePresence>
            {menu.map((item) => (
              <motion.div
                key={item._id}
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <MenuCard item={item}></MenuCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>        
      </Link>
    </div>
  );
};

export default Menu;
