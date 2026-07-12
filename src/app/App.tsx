import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "sonner";
import CoverMobile from "./components/CoverMobile";
import CoverDesktop from "./components/CoverDesktop";
import InvitationPage from "./components/InvitationPage";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Toaster position="top-center" richColors />
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="cover"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="block md:hidden h-full">
              <CoverMobile onOpen={() => setOpened(true)} />
            </div>
            <div className="hidden md:block h-full">
              <CoverDesktop onOpen={() => setOpened(true)} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            className="absolute inset-0 overflow-y-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="block md:hidden">
              <InvitationPage />
            </div>
            <div className="hidden md:block">
              <InvitationPage isDesktop />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
