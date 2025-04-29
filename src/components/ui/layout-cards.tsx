"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface BaseItem {
  id: string | number;
  name: string;
  description: string;
  imageFile?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

interface LayoutCardsProps<T extends BaseItem> {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  renderExpanded: (item: T) => React.ReactNode;
}

export function LayoutCards<T extends BaseItem>({ 
  items, 
  renderCard, 
  renderExpanded 
}: LayoutCardsProps<T>) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {renderCard(item)}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.8
              }}
              className="w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {renderExpanded(selectedItem)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 